describe("StringHash", function () {

    it("count no js no life", function () {
        
        let h = stringHash("no js no life");
        expect(h["no"]).toEqual(2);
        expect(h["js"]).toEqual(1);
        expect(h["life"]).toEqual(1);
        expect(Object.keys(h).length).toEqual(3);
    });

    it("coount no js no life no test no test", function () {

        let h = stringHash("no js no life no test no test");
        expect(h["no"]).toEqual(4);
        expect(h["js"]).toEqual(1);
        expect(h["life"]).toEqual(1);
        expect(h["test"]).toEqual(2);
        expect(Object.keys(h).length).toEqual(4);
    });
});