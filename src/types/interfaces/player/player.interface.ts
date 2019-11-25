/** Defines the Player interface */

import { PlayerIntent, PlayerPreferedFoot, PlayerAction } from '../../enums';
import { PlayerPosition } from './player-position.interface';
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
    offsides: number;
    rating: number;
}

export interface IBasePlayer {
    id: string | number;
    firstName: string;
    lastName: string;
    nickName?: string;
    initials?: string;
    positions: PlayerPosition[];
    attributes: IOutfieldPlayerAttributes | IGoalKeeperAttributes;
    metaAttributes: IMetaAttributes;
    condition: number;
    injured: boolean;
    form: number;
    preferedFoot: PlayerPreferedFoot;
    weakFootStrength: number;
}

export interface IMatchDayPlayer extends IBasePlayer {
    playingPosition: PlayerPosition;
    offside: boolean;
    hasBall: boolean;
    intent: PlayerIntent;
    action: PlayerAction;
    currentPOS: IPosition;
    stats: IPlayerStats;
    rating: number;
}
