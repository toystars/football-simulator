/** Defines the Player interface */

import { PlayerAction } from '../../enums';
import { PlayerPosition } from './player-position.interface';
import { PreferredFoot } from './player-preferred-foot.interface';
import { PlayerIntent } from './player-intent.interface';
import { IPosition } from '../position.interface';
import {
    ITechnicalAttributes,
    IMentalAttributes,
    IPhysicalAttributes,
    IGoalKeepingAttributes,
    IMetaAttributes
} from './player-attributes.interface';

export interface IPlayerAttributes {
    goalKeeping: IGoalKeepingAttributes;
    technical: ITechnicalAttributes;
    mental: IMentalAttributes;
    physical: IPhysicalAttributes;
}

export interface IStatData {
    total: number;
    on: number;
    off: number;
}

export interface ITackleStat extends IStatData {
    fouls: number;
}

export interface ICardsStat {
    yellow: number;
    red: number;
}

export interface IPlayerStats {
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
    attributes: IPlayerAttributes;
    metaAttributes?: IMetaAttributes;
    condition: number;
    injured: boolean;
    form: number;
    preferredFoot: PreferredFoot;
    weakFootStrength?: number;
    goalKeeperRating?: number;
}

export interface IMatchDayPlayer extends IBasePlayer {
    currentPOS: IPosition;
    playingPosition: PlayerPosition;
    offside: boolean;
    hasBall: boolean;
    intent: PlayerIntent;
    action?: PlayerAction;
    stats?: IPlayerStats;
    rating?: number;
}
