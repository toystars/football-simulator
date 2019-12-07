import { cloneDeep } from 'lodash';
import { validatePlayer } from '../player-validators.util';
import { IMatchDayPlayer, PlayerValidationError } from '../../../types';

const testPlayer: IMatchDayPlayer = {
    id: 1,
    firstName: 'Finidi',
    lastName: 'George',
    nickName: 'Head Master',
    initials: 'FG',
    positions: [{ position: 'RM', rating: 10 }, { position: 'RW', rating: 9 }],
    attributes: {
        goalKeeping: {
            aerialAbility: 1,
            handling: 1,
            kicking: 1,
            oneOnOne: 1,
            reflex: 1,
            rushingOut: 1,
            tendencyToPunch: 1,
            throwing: 1,
        },
        technical: {
            corners: 5,
            crossing: 5,
            dribbling: 5,
            finishing: 5,
            firstTouch: 5,
            freeKickTaking: 5,
            heading: 5,
            longShots: 5,
            longThrows: 5,
            marking: 5,
            passing: 5,
            penaltyTaking: 5,
            tackling: 5,
            technique: 5
        },
        mental: {
            aggression: 5,
            anticipation: 5,
            bravery: 5,
            composure: 5,
            concentration: 5,
            decisions: 5,
            determination: 5,
            flair: 5,
            leadership: 5,
            offTheBall: 5,
            positioning: 5,
            teamWork: 5,
            vision: 5,
            workRate: 5
        },
        physical: {
            acceleration: 5,
            agility: 5,
            balance: 5,
            jumpingReach: 5,
            naturalFitness: 5,
            pace: 5,
            stamina: 5,
            strength: 5
        }
    },
    condition: 86,
    injured: false,
    form: 8,
    preferredFoot: 'BOTH',
    playingPosition: { position: 'RW', rating: 9 },
    offside: false,
    hasBall: false,
    intent: 'NEUTRAL',
    currentPOS: { x: 0, y: 0 }
};

describe('Player Validator', () => {
    it('should throw PlayerValidationError on invalid player', () => {
        expect(() => validatePlayer(null as any)).toThrow(PlayerValidationError);
    });

    it('should throw PlayerValidationError for player without id', () => {
        expect(() => validatePlayer({} as any)).toThrow(PlayerValidationError);
    });

    it('should throw PlayerValidationError for player without attributes', () => {
        const playerClone  = cloneDeep(testPlayer);
        delete playerClone.attributes;
        expect(() => validatePlayer(playerClone)).toThrow(PlayerValidationError);
    });

    it('should throw PlayerValidationError for player without physical attribute', () => {
        const playerClone = cloneDeep(testPlayer);
        delete playerClone.attributes.physical;
        expect(() => validatePlayer(playerClone)).toThrow(PlayerValidationError);
    });

    it('should throw PlayerValidationError for player with invalid data for attribute', () => {
        const playerClone = cloneDeep(testPlayer);
        playerClone.attributes.mental.aggression = -17;
        expect(() => validatePlayer(playerClone)).toThrow(PlayerValidationError);
    });

    it('should return true for valid player', () => {
        expect(validatePlayer(testPlayer)).toBeTruthy();
    });
});
