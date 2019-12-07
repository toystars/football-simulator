/** Defines player preferred foot types and interfaces */

import { StringLitArray } from '../base';

const preferredFoot = StringLitArray(['LEFT', 'RIGHT', 'BOTH']);
export type PreferredFoot = (typeof preferredFoot)[number];

// valid preferred checker
export const isValidPreferredFoot = (currentPreferredFoot: PreferredFoot): currentPreferredFoot is PreferredFoot => preferredFoot.includes(currentPreferredFoot);
