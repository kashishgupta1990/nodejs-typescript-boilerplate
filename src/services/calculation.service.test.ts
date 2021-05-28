import {CalculationService} from "./calculation.service";

describe('CalcualtionService', () => {

    it('should return sum result correctly', () => {
        expect(CalculationService.add(2, 3)).toEqual(5);
    });
})
