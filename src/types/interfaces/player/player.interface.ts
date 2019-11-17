/** Defines the Player interface */

import { PlayerPosition, PlayerIntent, PlayerPreferedFoot, PlayerAction } from '../../enums';
import { IPosition } from '../position.interface';
import {
    ITechnicalAttributes,
    IMentalAttributes,
    IPhysicalAttributes,
    IGoalKeepingAttributes,
    IMetaAttributes
} from './player-attributes.interface';

interface IGoalKeeperAttributes {
    goalKeeping: IGoalKeepingAttributes;
    mental: IMentalAttributes;
    physical: IPhysicalAttributes;
}

interface IOutfieldPlayerAttributes {
    technical: ITechnicalAttributes;
    mental: IMentalAttributes;
    physical: IPhysicalAttributes;
}

interface IStatData {
    total: number;
    on: number;
    off: number;
}

interface ITackleStat extends IStatData {
    fouls: number;
}

interface ICardsStat {
    yellow: number;
    red: number;
}

interface IPlayerStats {
    goals: number;
    shots: IStatData;
    cards: ICardsStat;
    passes: IStatData;
    tackles: ITackleStat;
    rating: number;
}

export interface IBasePlayer {
    id: string;
    firstName: string;
    lastName: string;
    nickName?: string;
    initials: string;
    positions: PlayerPosition[];
    playingPosition: PlayerPosition;
    rating: number;
    attributes: IOutfieldPlayerAttributes | IGoalKeeperAttributes;
    metaAttributes: IMetaAttributes;
    condition: number;
    injured: boolean;
    form: number;
    preferedFoot: PlayerPreferedFoot;
    weakFootStrength: number;
}

export interface IMatchDayPlayer extends IBasePlayer {
    offside: boolean;
    hasBall: boolean;
    intent: PlayerIntent;
    action: PlayerAction;
    currentPOS: IPosition;
    stats: IPlayerStats;
    playingPositionRating: number;
}
