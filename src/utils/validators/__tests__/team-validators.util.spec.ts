import { validateTeam } from '../team-validators.util';
import { ITeam } from '../../../types';

describe('Team Validator', () => {
    it('should throw TypeError on invalid team', () => {
        expect(() => validateTeam(null as any)).toThrow(TypeError);
    });

    it('should throw TypeError on empty team', () => {
        expect(() => validateTeam({} as ITeam)).toThrow(TypeError);
    });

    it('should throw TypeError on incomplete team', () => {
        expect(() => validateTeam({ id: 'id1', name: 'team1' } as ITeam)).toThrow(TypeError);
    });

    it('should throw RangeError on incomplete team', () => {
        expect(() => validateTeam({ id: 'id1', name: 'team1', players: [] } as ITeam)).toThrow(RangeError);
    });

    it('should throw RangeError on incomplete team', () => {
        expect(() => validateTeam({ id: 'id1', name: 'team1', players: [{}, {}] } as ITeam)).toThrow(RangeError);
    });

    it('should return true for valid team', () => {
        expect(
            validateTeam({
                id: 'id1',
                name: 'team1',
                players: [{}, {}, {}, {}, {}, {}, {}, {}]
            } as ITeam)).toBeTruthy();
    });
});
