import { get } from 'lodash';
import {
    IMatchDayPlayer,
    PlayerPosition,
    isValidPosition,
    PlayerValidationError,
    isValidPreferredFoot
} from '../../types';
import {
    PLAYER_CONDITION_MIN,
    PLAYER_CONDITION_MAX,
    PLAYER_GOLAKEEPING_ATTRIBUTES_FIELDS,
    PLAYER_TECHNICAL_ATTRIBUTES_FIELDS,
    PLAYER_MENTAL_ATTRIBUTES_FIELDS,
    PLAYER_PHYSICAL_ATTRIBUTES_FIELDS,
    PLAYER_ATTRIBUTE_MIN,
    PLAYER_ATTRIBUTE_MAX
} from '../../types/constants';

/**
 * Validates a player
 * @function
 * @param {IMatchDayPlayer} player - The player to validate.
 */
export function validatePlayer(player: IMatchDayPlayer): boolean {
    // check for null, undefined or wrong data
    if (!player || typeof player !== 'object') {
        throw new PlayerValidationError('Please provide a valid player');
    }

    if (!player.id) {
        throw new PlayerValidationError('Player must have an id');
    }

    if (!player.firstName || !player.lastName) {
        throw new PlayerValidationError('Player must have both a first name and last name');
    }

    const fullName = `${player.firstName} ${player.lastName}`;

    // player positions check
    const playerPositionsCount = player.positions ? player.positions.length : 0;
    if (!playerPositionsCount || !validatePlayerPositions(player.positions)) {
        throw new PlayerValidationError(`${fullName} has invalid position${playerPositionsCount > 1 ? 's' : ''}`);
    }

    // player playing position check
    if (!player.playingPosition || !isValidPosition(player.playingPosition)) {
        throw new PlayerValidationError(`${fullName} has invalid playing position`);
    }

    // player injury status check
    if (player.injured) {
        throw new PlayerValidationError(`${fullName} is injured and unavailable for the match. Please provide a replacement`);
    }

    // player condition check
    if (player.condition < PLAYER_CONDITION_MIN || player.condition > PLAYER_CONDITION_MAX) {
        throw new PlayerValidationError(`${fullName} has invalid condition. Player condition must be between ${PLAYER_CONDITION_MIN} and ${PLAYER_CONDITION_MAX}`);
    }

    // preferred foot check
    if (!player.preferredFoot || !isValidPreferredFoot(player.preferredFoot)) {
        throw new PlayerValidationError(`Please provide valid preferred foot for ${fullName}`);
    }

    // validate attributes
    if (!validatePlayerAttributes(player)) {
        throw new PlayerValidationError(`Invalid attributes assigned to ${fullName}. Please review attributes. Each attribute must be between ${PLAYER_ATTRIBUTE_MIN} and ${PLAYER_ATTRIBUTE_MAX}`);
    }

    return true;
}

/**
 * Checks if player positions are valid
 * @function
 * @param {PlayerPosition} positions - Player positions to validate
 */
function validatePlayerPositions(positions: PlayerPosition[] = []): boolean {
    positions.forEach((position: PlayerPosition) => {
        if (!isValidPosition(position)) {
            return false;
        }
    });
    return true;
}

/**
 * Checks if player attributes are complete and valid
 * @function
 * @param {PlayerPosition} player - Player to validate.
 */
function validatePlayerAttributes(player: IMatchDayPlayer): boolean {
    // check player playing position
    if (player.playingPosition.position === 'GK') {
        // validate Goalkeeping attributes
        const goalKeeping = get(player, 'attributes.goalKeeping');
        if (!goalKeeping) return false;

        for (let x = 0; x < PLAYER_GOLAKEEPING_ATTRIBUTES_FIELDS.length; x++) {
            const field = PLAYER_GOLAKEEPING_ATTRIBUTES_FIELDS[x];
            const fieldData = get(goalKeeping, field);
            if (!fieldData || fieldData < PLAYER_ATTRIBUTE_MIN || fieldData > PLAYER_ATTRIBUTE_MAX) {
                return false;
            }
        }
    } else {
        // validate Technical attributes
        const technical = get(player, 'attributes.technical');
        if (!technical) return false;

        for (let x = 0; x < PLAYER_TECHNICAL_ATTRIBUTES_FIELDS.length; x++) {
            const field = PLAYER_TECHNICAL_ATTRIBUTES_FIELDS[x];
            const fieldData = get(technical, field);
            if (!fieldData || fieldData < PLAYER_ATTRIBUTE_MIN || fieldData > PLAYER_ATTRIBUTE_MAX) {
                return false;
            }
        }
    }

    // validate mental attributes
    const mental = get(player, 'attributes.mental');
    if (!mental) return false;

    for (let x = 0; x < PLAYER_MENTAL_ATTRIBUTES_FIELDS.length; x++) {
        const field = PLAYER_MENTAL_ATTRIBUTES_FIELDS[x];
        const fieldData = get(mental, field);
        if (!fieldData || fieldData < PLAYER_ATTRIBUTE_MIN || fieldData > PLAYER_ATTRIBUTE_MAX) {
            return false;
        }
    }

    // validate physical attributes
    const physical = get(player, 'attributes.physical');
    if (!physical) return false;

    for (let x = 0; x < PLAYER_PHYSICAL_ATTRIBUTES_FIELDS.length; x++) {
        const field = PLAYER_PHYSICAL_ATTRIBUTES_FIELDS[x];
        const fieldData = get(physical, field);
        if (!fieldData || fieldData < PLAYER_ATTRIBUTE_MIN || fieldData > PLAYER_ATTRIBUTE_MAX) {
            return false;
        }
    }

    return true;
}
