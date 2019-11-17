/** Defines the Team interface */

import { IMatchDayPlayer } from './player';
import { TeamIntent } from '../enums';

export interface ITeam {
    id: string;
    name: string;
    rating?: number;
    players: IMatchDayPlayer[];
    intent?: TeamIntent;
}
