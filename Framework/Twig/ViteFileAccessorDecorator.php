<?php declare(strict_types=1);

namespace Shopware\Administration\Framework\Twig;

use League\Flysystem\FilesystemOperator;
use Pentatrion\ViteBundle\Service\FileAccessor;
use Shopware\Core\Framework\Log\Package;
use Symfony\Component\Asset\Packages;

#[Package('framework')]
class ViteFileAccessorDecorator extends FileAccessor
{
    private string $assetPath;

    /**
     * @var array<string, array<string, array<string, mixed>>>
     */
    private array $content = [];

    /**
     * @internal
     */
    public function __construct(
        private readonly array $configs,
        private readonly FilesystemOperator $filesystem,
        private readonly Packages $packages,
    ) {
        $this->assetPath = $this->packages->getUrl('', 'asset');

        parent::__construct($this->assetPath, $configs, null);
    }

    public function hasFile(string $configName, string $fileType): bool
    {
        return $this->filesystem->has($this->getFileLocation($configName, $fileType));
    }

    /**
     * @return array<string, mixed>
     */
    public function getData(string $configName, string $fileType): array
    {
        // Depending on how many script tags are rendered, this method is called multiple times
        // Cache the content to avoid reading the file multiple times
        if (!isset($this->content[$configName][$fileType])) {
            $content = json_decode(
                $this->filesystem->read($this->getFileLocation($configName, $fileType)),
                true,
                flags: \JSON_THROW_ON_ERROR
            );

            // Replace the base generated by Vite with the symfony asset path
            $content['base'] = $this->assetPath;

            // Get all entrypoints for the administration
            foreach ($content['entryPoints']['administration'] as $key => $entrypoint) {
                // The entry points also contain configuration, for example "legacy" and a boolean value
                if (!\is_array($entrypoint)) {
                    continue;
                }

                // Prepend the asset path to the every entry point
                foreach ($entrypoint as $index => $entry) {
                    $content['entryPoints']['administration'][$key][$index] = \sprintf('%s%s', $this->assetPath, $entry);
                }
            }

            $this->content[$configName][$fileType] = $content;
        }

        return $this->content[$configName][$fileType];
    }

    /**
     * Combines the symfony asset path with the bundle configuration and the file type
     */
    private function getFileLocation(string $configName, string $fileType): string
    {
        if (!isset(self::FILES[$fileType])) {
            return '';
        }

        if (!isset($this->configs[$configName]['base'])) {
            return '.vite/' . self::FILES[$fileType];
        }

        return \sprintf('%s.vite/%s', $this->configs[$configName]['base'], self::FILES[$fileType]);
    }
}
