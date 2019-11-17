/** Defines the football pitch interface */

import { PitchTurfType } from '../enums';

export interface IPitch {
    length: number;
    width: number;
    turfType?: PitchTurfType;
}
