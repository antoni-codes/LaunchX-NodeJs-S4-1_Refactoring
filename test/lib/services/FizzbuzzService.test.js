const FizzbuzzService = require("./../../../lib/services/FizzbuzzService");

describe("Tests para validar Fizzbuzz", () => {
    test("1. Test para validar score", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        const test1 = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
        expect(test1.trick).toBe(1);
    });

    test("2. Test para validar FIZZ", () => {
        const explorer3 = { name: "Explorer3", score: 3 };
        const test2 = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(test2.trick).toBe("FIZZ");
    });

    test("3. Test para validar BUZZ", () => {
        const explorer5 = { name: "Explorer5", score: 5 };
        const test3 = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(test3.trick).toBe("BUZZ");
    });

    test("4. Test para validar FIZZBUZZ", () => {
        const explorer15 = { name: "Explorer15", score: 15 };
        const test4 = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(test4.trick).toBe("FIZZBUZZ");
    });

    test("5. Test para validar FIZZBUZZ por nuevo requerimiento", () => {
        const explorer = {name: 'Explorer', score: 15}
        const test5 = FizzbuzzService.applyValidationInNumber(explorer)

        expect(test5.trick).toBe("Fizzbuzz")
    })

});
