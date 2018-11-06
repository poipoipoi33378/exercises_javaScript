describe("convertHash", function () {

    it("bubble sort sample1", function () {
        hash = {
            "main": {
                "first": { "text": "foobar" },
                "second": { "text": "fizzbuzz", "child": { "text": "foobar" } }
            },
        }
        result = toUry(hash);

        expect(result.main.first.text).toEqual("uryyyy!!bar");
        expect(result.main.second.child.text).toEqual("uryyyy!!bar");
    });
});