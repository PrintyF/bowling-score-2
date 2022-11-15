import { bowlingScore } from '../main'

describe('bowling score', ()=> {
    describe('basic tests no specials', ()=> {
        describe('one throw', ()=> {
           it('No pin no point', () => {
               expect(bowlingScore([0])).toEqual(0)
            });
           it('1 pins', () => {
               expect(bowlingScore([1])).toEqual(1)
            });
        });
        describe('two throws', ()=> {
            it('one pin each', () => {
                expect(bowlingScore([1, 1])).toEqual(2)
            });
            it('other combinations', () => {
                expect(bowlingScore([3, 2])).toEqual(5)
            });
        });
        describe('with strikes', ()=> {
            it('one strike', () => {
                expect(bowlingScore([10, 1, 1])).toEqual(14)
            });
            it('one strike with more throws', () => {
                expect(bowlingScore([1, 10, 1, 1, 1])).toEqual(16)
            });

        });
    });
});