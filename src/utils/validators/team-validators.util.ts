import { ITeam, MANDATORY_TEAM_FIELDS, TeamValidator, TeamValidationError } from '../../types';
import { hasProperty } from '../utils';

/**
 * Validates a team
 * @function
 * @param {ITeam} team - The team to validate.
 */
export function validateTeam(team: ITeam): boolean {
    // validate type of team data
    const typeOfTeam = typeof team;
    if (typeOfTeam !== `object`) {
        throw new TeamValidationError(`Invalid Team - Expects team to be an object of type ITeam but found ${typeOfTeam}`);
    }

    for (const teamField of MANDATORY_TEAM_FIELDS) {
        if (!hasProperty(team, teamField)) {
            throw new TeamValidationError(`Invalid Team - Team must contain field: ${teamField}`);
        }
    }

    // validate number of players in team
    const numberOfTeamPlayers = team.players.length;
    if (numberOfTeamPlayers < TeamValidator.MinNumberOfPlayers || numberOfTeamPlayers > TeamValidator.MaxNumberOfPlayers) {
        throw new TeamValidationError(`Invalid Team - Number of team players must be between ${TeamValidator.MinNumberOfPlayers} and ${TeamValidator.MaxNumberOfPlayers}`);
    }

    return true;
}
