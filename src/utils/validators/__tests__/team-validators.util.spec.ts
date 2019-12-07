import { validateTeam } from '../team-validators.util';
import { ITeam, TeamValidationError } from '../../../types';

describe('Team Validator', () => {
    it('should throw TeamValidationError on invalid team', () => {
        expect(() => validateTeam(null as any)).toThrow(TeamValidationError);
    });

    it('should throw TeamValidationError on empty team', () => {
        expect(() => validateTeam({} as ITeam)).toThrow(TeamValidationError);
    });

    it('should throw TeamValidationError on incomplete team', () => {
        expect(() => validateTeam({ id: 'id1', name: 'team1' } as ITeam)).toThrow(TeamValidationError);
    });

    it('should throw TeamValidationError on incomplete team', () => {
        expect(() => validateTeam({ id: 'id1', name: 'team1', players: [] } as ITeam)).toThrow(TeamValidationError);
    });

    it('should throw TeamValidationError on incomplete team', () => {
        expect(() => validateTeam({ id: 'id1', name: 'team1', players: [{}, {}] } as ITeam)).toThrow(TeamValidationError);
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
