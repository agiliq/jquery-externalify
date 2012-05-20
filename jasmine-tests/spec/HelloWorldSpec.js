describe("Hello world", function() {
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });
    
    it("contains hai", function() {
        expect(hai()).toContain("ai");
    });
});
