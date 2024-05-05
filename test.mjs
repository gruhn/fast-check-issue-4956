import { describe, it } from 'mocha'
import { expect } from 'chai'
import fc from 'fast-check'

describe("foo", () => {
  it("bar", () => {
        fc.assert(
        fc.property(
          fc.integer(),
          (n) => {
            expect(n).to.deep.equal(3);
          },
        ),
      );
  });
});
