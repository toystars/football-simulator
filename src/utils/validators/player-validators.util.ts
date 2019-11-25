import { IBasePlayer, PlayerPosition, isValidPosition, PlayerValidationError } from '../../types';
// import { hasProperty } from '../utils';

const mandatoryPlayersFields = [
    // playingPosition: PlayerPosition;
    // attributes: IOutfieldPlayerAttributes | IGoalKeeperAttributes;
    // metaAttributes: IMetaAttributes;
    // condition: number;
    // injured: boolean;
    // form: number;
    // preferedFoot: PlayerPreferedFoot;
    // weakFootStrength: number;
];

/**
 * Validates a player
 * @function
 * @param {IMatchDayPlayer} player - The player to validate.
 */
export function validatePlayer(player: IBasePlayer): boolean {
    if (!player.id) {
        throw new PlayerValidationError('Player must have an id');
    }

    if (!player.firstName || !player.lastName) {
        throw new PlayerValidationError('Player must have both a first name and last name');
    }

    const playerPositionsCount = player.positions ? player.positions.length : 0;
    if (!playerPositionsCount || !validatePlayerPositions(player.positions)) {
        throw new PlayerValidationError(`Player has invalid position${playerPositionsCount > 1 ? 's' : ''}`);
    }

    return true;
}

/**
 * Checks is player positions are valid
 * @function
 * @param {PlayerPosition} positions - The turf type to validate.
 */
function validatePlayerPositions(positions: PlayerPosition[]): boolean {
    positions.forEach((position: PlayerPosition) => {
        if (!isValidPosition(position)) {
            return false;
        }
    });
    return true;
}
