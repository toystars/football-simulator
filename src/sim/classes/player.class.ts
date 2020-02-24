/** Player Class Definition */

import { IMatchDayPlayer } from '../../types';

export class CPlayer {

    constructor(playerData: IMatchDayPlayer) {
        this.data = playerData;
    }

    // matchday player data
    data: IMatchDayPlayer;

    // main method that decides player's next action
    takeAction() {

    }
}
