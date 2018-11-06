describe("Hit&Blow", function () {

    it("create target", function () {
        let hb = new HitAndBlow();

        for(let i=0;i<4;i++){
            for (let j = 0; j < 4; j++) {
                if(i!=j){
                    expect(hb.target[i]).not.toEqual(hb.target[j]);
                }
            }
        }
    });

    it("tryCode", function () {
        let hb = new HitAndBlow();

        hb.target = [1,2,3,4];
        hb.tryCode([1,2,3,4]);

        expect(hb.result.hit).toEqual(4);
        expect(hb.result.blow).toEqual(0);

    });

});
