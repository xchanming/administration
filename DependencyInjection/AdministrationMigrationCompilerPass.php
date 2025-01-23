<?php declare(strict_types=1);

namespace Cicada\Administration\DependencyInjection;

use Cicada\Core\Framework\Log\Package;
use Cicada\Core\Framework\Migration\MigrationSource;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

#[Package('framework')]
class AdministrationMigrationCompilerPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container): void
    {
        $migrationPath = \dirname(__DIR__) . '/Migration';

        // configure migration directories
        $migrationSourceV4 = $container->getDefinition(MigrationSource::class . '.core.V6_4');
        $migrationSourceV4->addMethodCall('addDirectory', [$migrationPath . '/V6_4', 'Cicada\Administration\Migration\V6_4']);

        $majors = ['V6_5', 'V6_6'];
        foreach ($majors as $major) {
            $migrationPathV5 = $migrationPath . '/' . $major;

            if (\is_dir($migrationPathV5)) {
                $migrationSource = $container->getDefinition(MigrationSource::class . '.core.' . $major);
                $migrationSource->addMethodCall('addDirectory', [$migrationPathV5, 'Cicada\Administration\Migration\\' . $major]);
            }
        }
    }
}
