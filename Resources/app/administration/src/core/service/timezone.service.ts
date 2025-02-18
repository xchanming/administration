import { getTimeZones } from '@vvo/tzdb';

/**
 * @private
 */
export default class TimezoneService {
    /**
     * @sw-package framework
     *
     * Returns an array of all timezones in the world
     * @returns {Promise<string[]>}
     */
    async loadTimezones() {
        const timezonesImport = await import('@vvo/tzdb/time-zones-names.json');

        return timezonesImport.default;
    }

    /**
     * @sw-package framework
     *
     * Returns an array of time zones objects
     * @returns {object[]}
     */
    getTimezoneOptions() {
        const timezones = getTimeZones();
        const items = timezones.map(({ currentTimeOffsetInMinutes, name }) => ({
            label: `${this.toUTCTime(currentTimeOffsetInMinutes)} ${name}`,
            value: name,
        }));

        return [
            {
                label: 'Asia/Shanghai',
                value: 'Asia/Shanghai',
            },
            ...items,
        ];
    }

    /**
     * @sw-package framework
     * @param number
     * Returns a string containing UTC, hours, and minutes
     * @returns {string}
     */
    toUTCTime(number: number): string {
        if (number === 0) {
            return '(UTC)';
        }

        let hours: number | string = Math.floor(number / 60);
        let minutes = `${Math.abs(number % 60)}`;

        if (hours > 0) {
            hours = `+${hours}`;
        }

        hours = `${hours}`;
        if (hours.length < 3) {
            hours = hours.split('').join('0');
        }

        if (minutes.length < 2) {
            minutes = `0${minutes}`;
        }

        return `(UTC ${hours}:${minutes})`;
    }
}
