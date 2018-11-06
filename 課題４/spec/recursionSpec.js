describe("recursion", function () {

    it("calc", function () {
        expect(recursion(1)).toEqual(1)
        expect(recursion(2)).toEqual(3)
        expect(recursion(5)).toEqual(15)
        expect(recursion(6)).toEqual(15+6)
        expect(recursion(7)).toEqual(15 + 6 + 7)
        expect(recursion(8)).toEqual(15 + 6 + 7 + 8)
    });
});
