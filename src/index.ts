import { CalculationService } from "./services/calculation.service";

class Index {

    public static async init() {
        // TODO: Do all init call here.

        console.log(`Result: ${CalculationService.add(2, 2)}`);
    }
}

// Init call
(async function() {
    await Index.init();
})();
