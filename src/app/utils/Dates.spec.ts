import { isExpired } from "./Dates";

describe('Dates utilities', () => {
  describe('given an empty datetime', () => {
    describe('when calls isExpired', () => {
      it('should return false', () => {
        expect(isExpired(undefined)).toBeFalsy();
      });
    });
  });

  describe('given a past datetime', () => {
    describe('when calls isExpired', () => {
      it('should return true', () => {
        expect(isExpired('2000-01-01T00:00:00.000Z')).toBeTruthy();
      });
    });
  });
});
