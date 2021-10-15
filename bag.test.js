const Bag = require("./bag")
const overWeightBag = new Bag(30)
const bag = new Bag(10)

describe('bag', () => {
    test('should return true or false', () => {
      expect(overWeightBag.isOverLimit()).toBe(true);
      expect(bag.isOverLimit()).toBe(false);
    })
  })
  


