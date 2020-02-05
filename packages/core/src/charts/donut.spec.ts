import { TestEnvironment, options as chartOptions } from "../tests/index";

// import the settings for the css prefixes
import settings from "carbon-components/src/globals/js/settings";
import { options } from "./../configuration";
import { donutData, donutOptions } from "../../demo/demo-data";
import { select, selectAll } from "d3-selection";

describe("title component", () => {
	beforeEach(function() {
        const testEnvironment = new TestEnvironment();
        testEnvironment.chartType = "DonutChart";
        testEnvironment.chartData = donutData;
        testEnvironment.chartOptions = "DonutChart";
		testEnvironment.render();

		this.chart = testEnvironment.getChartReference();
		this.testEnvironment = testEnvironment;
	});

	describe("content", () => {
		it("should match text provided in options", async function(done) {

			const chartEventsService = this.chart.services.events;
			const renderCb = () => {
				// Remove event listener for when chart render is finished
                chartEventsService.removeEventListener("render-finished", renderCb);

				done();
			};

			// Add event listener for when chart render is finished
			chartEventsService.addEventListener("render-finished", renderCb);
		});
	});

	afterEach(function() {
		this.testEnvironment.destroy();
	});
});
