describe("sort", function () {

    it("bubble sort sample1", function () {
        let arry = [20,31,42,5,38];

        let result = bubbleSort(arry);
        expect(result[0]).toEqual(5)
        expect(result[1]).toEqual(20)
        expect(result[2]).toEqual(31)
        expect(result[3]).toEqual(38)
        expect(result[4]).toEqual(42)
    });

    it("bubble sort sample2", function () {
        let arry = [20, 31, 42, 5, 38,0,-1,100];

        let result = bubbleSort(arry);
        expect(result[0]).toEqual(-1)
        expect(result[1]).toEqual(0)
        expect(result[2]).toEqual(5)
        expect(result[3]).toEqual(20)
        expect(result[4]).toEqual(31)
        expect(result[5]).toEqual(38)
        expect(result[6]).toEqual(42)
        expect(result[7]).toEqual(100)
    });

    it("bubble sort sample3", function () {
        let arry = [20, 31, 42, 5, 38, 38, 31, 100];

        let result = bubbleSort(arry);
        expect(result[0]).toEqual(5)
        expect(result[1]).toEqual(20)
        expect(result[2]).toEqual(31)
        expect(result[3]).toEqual(31)
        expect(result[4]).toEqual(38)
        expect(result[5]).toEqual(38)
        expect(result[6]).toEqual(42)
        expect(result[7]).toEqual(100)
    });

    it("quick sort sample1", function () {
        let arry = [20, 31, 42, 5, 38];

        let result = quickSort(arry);
        expect(result[0]).toEqual(5)
        expect(result[1]).toEqual(20)
        expect(result[2]).toEqual(31)
        expect(result[3]).toEqual(38)
        expect(result[4]).toEqual(42)
    });

    it("quick sort sample2", function () {
        let arry = [20, 31, 42, 5, 38, 0, -1, 100];

        let result = quickSort(arry);
        expect(result[0]).toEqual(-1)
        expect(result[1]).toEqual(0)
        expect(result[2]).toEqual(5)
        expect(result[3]).toEqual(20)
        expect(result[4]).toEqual(31)
        expect(result[5]).toEqual(38)
        expect(result[6]).toEqual(42)
        expect(result[7]).toEqual(100)
    });

    it("quick sort sample3", function () {
        let arry = [20, 31, 42, 5, 38, 38, 31, 100];

        let result = quickSort(arry);
        expect(result[0]).toEqual(5)
        expect(result[1]).toEqual(20)
        expect(result[2]).toEqual(31)
        expect(result[3]).toEqual(31)
        expect(result[4]).toEqual(38)
        expect(result[5]).toEqual(38)
        expect(result[6]).toEqual(42)
        expect(result[7]).toEqual(100)
    });

    it("sum and average", function () {
        let arry = [20, 31, 42, 5, 38, 38, 31, 100];

        expect(sum(arry)).toEqual(305)
        expect(average(arry)).toEqual(38.125)
    });

    it("max and min", function () {
        let arry = [20, 31, 42, 5, 38, 38, 31, 100];

        expect(max(arry)).toEqual(100)
        expect(min(arry)).toEqual(5)
    });
    it("reverse", function () {
        let arry = [20, 31, 42, 5, 38];

        let result = reverse(arry);
        expect(result[0]).toEqual(38)
        expect(result[1]).toEqual(5)
        expect(result[2]).toEqual(42)
        expect(result[3]).toEqual(31)
        expect(result[4]).toEqual(20)
    });
});