import { getDates, getRoundedRandomNumber, stockPriceGenerator } from './mocks';
import moment from 'moment';

describe('stockPriceGenerator', () => {
  const STOCK_SYMBOL = 'GOOG';
  const A_DATE = '2019-01-31';
  const NUMBER_OF_DAYS = 3;
  const MIN = 100;
  const MAX = 200;

  describe('when duration is NUMBER_OF_DAYS day', () => {
    it('returns an array of NUMBER_OF_DAYS objects containing date and price', () => {
      const stockPrices = stockPriceGenerator(STOCK_SYMBOL, NUMBER_OF_DAYS);
      console.log(stockPrices);
      expect(stockPrices).toHaveLength(3);
    });
  });

  describe('getDates', () => {
    describe('when two dates with NUMBER_OF_DAYS of difference', () => {
      it('returns an array of the NUMBER_OF_DAYS between those two dates', () => {
        const stopDate = moment(A_DATE);
        const tempDate = moment(A_DATE);
        const startDate = tempDate.subtract(NUMBER_OF_DAYS, 'days');
        const results = getDates(startDate, stopDate);
        const expected = ['2019-01-29', '2019-01-30', '2019-01-31'];
        console.log(results);
        expect(results).toEqual(expected);
      });
    });

  });

  describe('getRoundedRandomNumber', () => {
    it('returns a random Number between MIN and MAX', () => {
      const firstResult = getRoundedRandomNumber(MIN, MAX);
      const secondResult = getRoundedRandomNumber(MIN, MAX);
      expect(firstResult).toBeGreaterThanOrEqual(MIN);
      expect(firstResult).toBeLessThanOrEqual(MAX);
      expect(secondResult).toBeGreaterThanOrEqual(MIN);
      expect(secondResult).toBeLessThanOrEqual(MAX);
      expect(firstResult).not.toEqual(secondResult);
    });
  });

});
