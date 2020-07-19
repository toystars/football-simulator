/** Player Class Definition */

import { IMatchDayPlayer } from '../../types';

/** @internal */
export class CPlayer {
    // matchday player data
    data: IMatchDayPlayer;

    constructor(playerData: IMatchDayPlayer) {
        this.data = playerData;
    }

    // main method that decides player's next action
    takeAction() {

    }
}
