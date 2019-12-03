import { AxisChartOptions } from "@carbon/charts/interfaces"

export interface Options extends AxisChartOptions {}

export function migrateOptions(options: Options) {
    // Replaces any "secondary keys in the given options with primary"
    if ("axes" in options) {
        // Checks if any secondary keys exist within each 
        if ("left" in options.axes && "secondary" in options.axes.left) {
            console.log("shouldn't be here");
            Object.defineProperty(options.axes.left, "primary", Object.getOwnPropertyDescriptor(options.axes.left, "secondary"));
            delete options.axes.left["secondary"];
        }

        if ("bottom" in options.axes && "secondary" in options.axes.bottom) {
            Object.defineProperty(options.axes.bottom, "primary", Object.getOwnPropertyDescriptor(options.axes.bottom, "secondary"));
            delete options.axes.bottom["secondary"];
        }

        if ("top" in options.axes && "secondary" in options.axes.top) {
            Object.defineProperty(options.axes.top, "primary", Object.getOwnPropertyDescriptor(options.axes.top, "secondary"));
            delete options.axes.top["secondary"];
        }

        if ("right" in options.axes && "secondary" in options.axes.right) {
            Object.defineProperty(options.axes.right, "primary", Object.getOwnPropertyDescriptor(options.axes.right, "secondary"));
            delete options.axes.right["secondary"];
        }
    }
    return options;
}