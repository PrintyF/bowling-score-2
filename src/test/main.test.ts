import { bowlingScore } from '../main'

describe('bowling score', ()=> {
    describe('basic tests no specials', ()=> {
       it('No pin no point', () => {
           expect(bowlingScore([0])).toEqual(0)
        });
    });
});