/** Defines player positions types and interfaces */

import { StringLitArray } from '../base';

const position = StringLitArray(['GK' , 'LB' , 'RB' , 'LWB' , 'RWB' , 'LCB' , 'RCB' , 'CB' , 'SW' , 'DM' , 'LM' , 'RM' , 'CM' , 'AM' , 'LW' , 'RW' , 'ST']);
export type Position = (typeof position)[number];

export interface PlayerPosition {
    position: Position;
    rating?: number;
}

// valid position checker
export const isValidPosition = (currentPosition: PlayerPosition): currentPosition is PlayerPosition => position.includes(currentPosition.position);
