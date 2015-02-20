describe("Pizza", function() {
  describe("getSlices", function() {
    it("returns the number of slices that a pizza will have based on the diameter", function() {
      var pizza = Object.create(Pizza);
      pizza.diameter = 12;
      expect(pizza.slices(pizza.diameter)).to.equal(8)
    });
  });
});
