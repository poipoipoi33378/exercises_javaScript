describe("Junken", function () {

    it("judge computer is win every time", function () {
        let janken = new Janken()

        janken.your = "グー"
        expect(janken.computer).toEqual("パー");
        expect(janken.judge()).toEqual("コンピュータの勝ち");
    });
});
