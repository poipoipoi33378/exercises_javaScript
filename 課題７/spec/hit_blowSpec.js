class GenerateTestNumber {
    constructor(){
        this.dumyArray = [];
        this.dumycounter = 0;
    }

    number0to9() {
        let num = this.dumyArray[this.dumycounter];
        this.dumycounter++;
        return num;
    }
}

describe("HitAndBlow", function () {

    it("create target from [1,2,3,9]", function () {
        let dumy = new GenerateTestNumber();
        dumy.dumyArray = [1, 2, 3, 9];
        let hb = new HitAndBlow(dumy);

        expect(hb.target[0]).toEqual(1);
        expect(hb.target[1]).toEqual(2);
        expect(hb.target[2]).toEqual(3);
        expect(hb.target[3]).toEqual(9);
    });

    it("create target from [9,9.9,9]", function () {
        let dumy = new GenerateTestNumber();
        dumy.dumyArray = [9, 9, 9, 9];
        let hb = new HitAndBlow(dumy);

        expect(hb.target[0]).toEqual(9);
        expect(hb.target[1]).toEqual(1);
        expect(hb.target[2]).toEqual(2);
        expect(hb.target[3]).toEqual(3);
    });

    it("create from [1,1.9,9]", function () {
        let dumy = new GenerateTestNumber();
        dumy.dumyArray = [1, 1, 9, 9];
        let hb = new HitAndBlow(dumy);

        expect(hb.target[0]).toEqual(1);
        expect(hb.target[1]).toEqual(2);
        expect(hb.target[2]).toEqual(9);
        expect(hb.target[3]).toEqual(3);
    });

    it("create target from random", function () {
        let hb = new HitAndBlow();

        for(let i=0;i<4;i++){
            expect((hb.target[i] >= 0) && (hb.target[i] <= 9)).toEqual(true);
        }
    });

    it("tryCode 4hit 0blow", function () {
        let hb = new HitAndBlow();

        hb.target = [1,2,3,4];
        hb.tryCode([1,2,3,4]);

        expect(hb.result.hit).toEqual(4);
        expect(hb.result.blow).toEqual(0);
    });

    it("tryCode 0hit 4blow", function () {
        let hb = new HitAndBlow();

        hb.target = [1, 2, 3, 4];
        hb.tryCode([4, 3, 2, 1]);

        expect(hb.result.hit).toEqual(0);
        expect(hb.result.blow).toEqual(4);
    });

    it("tryCode 2hit 2blow", function () {
        let hb = new HitAndBlow();

        hb.target = [1, 2, 3, 4];
        hb.tryCode([1, 4, 3, 2]);

        expect(hb.result.hit).toEqual(2);
        expect(hb.result.blow).toEqual(2);
    });

});
