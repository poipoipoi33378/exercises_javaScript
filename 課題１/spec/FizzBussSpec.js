describe("Fizz buzz", function () {

    it("fizz buss", function () {
        
        expect(fizz_buzz(1)).toEqual(1);
        expect(fizz_buzz(2)).toEqual(2);
        expect(fizz_buzz(3)).toEqual("Fizz");
        expect(fizz_buzz(4)).toEqual(4);
        expect(fizz_buzz(5)).toEqual("Buzz");
        expect(fizz_buzz(6)).toEqual("Fizz");
        expect(fizz_buzz(7)).toEqual(7);
        expect(fizz_buzz(8)).toEqual(8);
        expect(fizz_buzz(9)).toEqual("Fizz");
        expect(fizz_buzz(10)).toEqual("Buzz");
        expect(fizz_buzz(11)).toEqual(11);
        expect(fizz_buzz(12)).toEqual("Fizz");
        expect(fizz_buzz(13)).toEqual(13);
        expect(fizz_buzz(14)).toEqual(14);
        expect(fizz_buzz(15)).toEqual("FizzBuzz");
        expect(fizz_buzz(30)).toEqual("FizzBuzz");
    });
});
