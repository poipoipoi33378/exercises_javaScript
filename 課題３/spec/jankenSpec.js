describe("Janken", function () {

    it("judge juiken", function () {
        let janken = new Janken()

        janken.setYour(GU)
        janken.computer = PA
        expect(janken.judge()).toEqual("コンピュータの勝ち");

        janken.setYour(PA)
        janken.computer = CHO
        expect(janken.judge()).toEqual("コンピュータの勝ち");

        janken.setYour(CHO)
        janken.computer = GU
        expect(janken.judge()).toEqual("コンピュータの勝ち");

        janken.setYour(GU)
        janken.computer = GU
        expect(janken.judge()).toEqual("あいこ");

        janken.setYour(CHO)
        janken.computer = CHO
        expect(janken.judge()).toEqual("あいこ");

        janken.setYour(PA)
        janken.computer = PA
        expect(janken.judge()).toEqual("あいこ");

        janken.setYour(GU)
        janken.computer = CHO
        expect(janken.judge()).toEqual("あなたの勝ち");

        janken.setYour(PA)
        janken.computer = GU
        expect(janken.judge()).toEqual("あなたの勝ち");

        janken.setYour(CHO)
        janken.computer = PA
        expect(janken.judge()).toEqual("あなたの勝ち");

    });

    it("set next comuter", function () {
        let janken = new Janken()
        janken.setComuter()
        expect((janken.computer == PA) || (janken.computer == GU) || (janken.computer == CHO)).toBeTruthy();;
    }); 
});
