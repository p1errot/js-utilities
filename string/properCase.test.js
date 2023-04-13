import properCase from "./properCase";

describe('properCase utility', () => {
  test('should return the first letter in upper case', () => {
    expect(properCase('house')).toEqual('House');
  });
});
