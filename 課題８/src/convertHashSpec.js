describe("convertHash", function () {

    it("toUry", function () {
        hash = {
            "main": {
                "first": { "text": "foobar" },
                "second": { "text": "fizzbuzz", "child": { "text": "foobar" } }
            },
            "sub" : {
                "first": { "text": "fizzbuzz", "child": { "text": "foobar" } },
                "second": {
                    "third": { "text": "barfoo", "child": { "text": "foobar" } },
                    "forth": { "child": { "text": "jit_foo_foo" } }
                }
            },
            "text" : "foofava",
            "last": { "text": "foofoofoofoofoofoo" },
        };
        result = toUry(hash);

        expect(result.main.first.text).toEqual("uryyyy!!bar");
        expect(result.main.second.text).toEqual("fizzbuzz");
        expect(result.main.second.child.text).toEqual("uryyyy!!bar");
        expect(result.sub.first.text).toEqual("fizzbuzz");
        expect(result.sub.first.child.text).toEqual("uryyyy!!bar");
        expect(result.sub.second.third.text).toEqual("baruryyyy!!");
        expect(result.sub.second.third.child.text).toEqual("uryyyy!!bar");
        expect(result.sub.second.forth.child.text).toEqual("jit_uryyyy!!_uryyyy!!");
        expect(result.text).toEqual("uryyyy!!fava");
        expect(result.last.text).toEqual("uryyyy!!uryyyy!!uryyyy!!uryyyy!!uryyyy!!uryyyy!!");
    });
});