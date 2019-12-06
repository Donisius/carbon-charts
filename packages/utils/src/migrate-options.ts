import * as semver from "semver";
import { MigrationInterface } from "./migrations/migration.interface";
import { Migration_0_20_1 } from "./migrations/migrations";

export class MigrateOptions {
	migrations: MigrationInterface[] = [ // keep these in chronological sequence
		new Migration_0_20_1()
	];

	/**
	 * Returns options from oldChartVersion format to newChartVersion format.
	 */
	migrateOptions(oldChartVersion: string, options: any, newChartVersion = "latest") {
		if (
			!semver.valid(oldChartVersion) ||
			!semver.valid(newChartVersion) ||
			semver.gt(oldChartVersion, newChartVersion)
		) {
			return JSON.parse(JSON.stringify(options));
		}

		let newOptions = options;

		this.migrations
			.filter(migration =>
				semver.lte(oldChartVersion, migration.version) &&
				semver.gte(newChartVersion, migration.version)
			).forEach(migration => newOptions = migration.migrate(newOptions));

		return newOptions;
	}
}

