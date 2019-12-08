/** Defines the ball interface */

import { IPosition } from './position.interface';

export interface IBall {
    currentPosition: IPosition;
    destination: IPosition;
    path: IPosition[];
    speed: number;
    frictionRate: number;
}
