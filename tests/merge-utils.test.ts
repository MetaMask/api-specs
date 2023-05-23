// @ts-ignore
import mergeOpenRPC from '../merge-utils';

describe("merge openrpc document", () => {
  describe('mergeOpenRPC', () => {
    it('result does not contain duplicate methods', () => {
      const doc1 = {
        info: {},
        methods: [
          { name: 'foo', description: 'abc' },
          { name: 'bar' },
          { name: 'baz' },
        ],
        components: {}
      };
      const doc2 = {
        info: {},
        methods: [
          { name: 'foo', description: '123' },
          { name: 'bling' },
          { name: 'blang' },
        ],
        components: {}
      };
      expect(mergeOpenRPC(doc1, doc2).methods[0].description).toBe("abc");
    });
  });
});
