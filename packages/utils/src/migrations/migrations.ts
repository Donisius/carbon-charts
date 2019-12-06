import { MigrationInterface } from "./migration.interface";

// tslint:disable-next-line
export class Migration_0_20_1 implements MigrationInterface {
	version = "0.20.1";

	// Updates given option "secondary" keys to "primary".
	migrate(options: any) {
		const newOptions = JSON.parse(JSON.stringify(options));
		if ("axes" in newOptions) {
			// Checks if any secondary keys exist within each axis placement.
			if ("left" in newOptions.axes && "secondary" in newOptions.axes.left) {

				Object.defineProperty(
					newOptions.axes.left,
					"primary",
					Object.getOwnPropertyDescriptor(newOptions.axes.left, "secondary")
				);

				delete newOptions.axes.left["secondary"];
			}

			if ("bottom" in newOptions.axes && "secondary" in newOptions.axes.bottom) {

				Object.defineProperty(
					newOptions.axes.bottom,
					"primary",
					Object.getOwnPropertyDescriptor(newOptions.axes.bottom, "secondary")
				);

				delete newOptions.axes.bottom["secondary"];
			}

			if ("top" in newOptions.axes && "secondary" in newOptions.axes.top) {

				Object.defineProperty(
					newOptions.axes.top,
					"primary",
					Object.getOwnPropertyDescriptor(newOptions.axes.top, "secondary")
				);

				delete newOptions.axes.top["secondary"];
			}

			if ("right" in newOptions.axes && "secondary" in newOptions.axes.right) {

				Object.defineProperty(
					newOptions.axes.right,
					"primary",
					Object.getOwnPropertyDescriptor(newOptions.axes.right, "secondary")
				);

				delete newOptions.axes.right["secondary"];
			}
		}
		return newOptions;
	}
}
