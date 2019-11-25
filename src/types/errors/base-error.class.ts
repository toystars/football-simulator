/**
 * Represents a pitch validation error.
 * @constructor
 * @param {string} message - Error message.
 */
export class PitchValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PitchValidationError';
    }
}

/**
 * Represents a team validation error.
 * @constructor
 * @param {string} message - Error message.
 */
export class TeamValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TeamValidationError';
    }
}

/**
 * Represents a player validation error.
 * @constructor
 * @param {string} message - Error message.
 */
export class PlayerValidationError extends Error {
    constructor(message: string) {
        super(`Invalid Player - ${message}`);
        this.name = 'PlayerValidationError';
    }
}
