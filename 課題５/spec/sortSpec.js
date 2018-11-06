describe("sort", function () {

    it("bubble sort", function () {
        let arry = [20,31,42,5,38];

        let result = bubbleSort(arry);
        expect(result[0]).toEqual(5)
        expect(result[1]).toEqual(20)
        expect(result[2]).toEqual(31)
        expect(result[3]).toEqual(38)
        expect(result[4]).toEqual(42)
    });
});