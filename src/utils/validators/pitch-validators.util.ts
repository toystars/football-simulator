import { IPitch, PitchDimensionsLength, PitchDimensionsWidth, PitchTurfType, PitchValidationError } from '../../types';
import { hasProperty } from '../utils';

/**
 * Validates a pitch object
 * @function
 * @param {IPitch} pitch - The pitch to validate.
 */
export function validatePitch(pitch: IPitch): boolean {
    if (!hasProperty(pitch, 'length') || !hasProperty(pitch, 'width')) {
        throw new PitchValidationError('Invalid Pitch - Pitch length and width must be provided!');
    } else if (pitch.length < PitchDimensionsLength.Min || pitch.length > PitchDimensionsLength.Max) {
        throw new PitchValidationError(`Invalid Pitch - Pitch length must be between ${PitchDimensionsLength.Min} and ${PitchDimensionsLength.Max}`);
    } else if (pitch.width < PitchDimensionsWidth.Min || pitch.width > PitchDimensionsWidth.Max) {
        throw new PitchValidationError(`Invalid Pitch - Pitch width must be between ${PitchDimensionsWidth.Min} and ${PitchDimensionsWidth.Max}`);
    } else if (pitch.turfType && !turfTypeValid(pitch.turfType)) {
        throw new PitchValidationError(`Invalid Pitch - Pitch turf type should be either ${PitchTurfType.Grass} or ${PitchTurfType.AstroTurf}`);
    }

    return true;
}

/**
 * Checks is turf type is valid
 * @function
 * @param {PitchTurfType} turfType - The turf type to validate.
 */
function turfTypeValid(turfType: PitchTurfType): boolean {
    return turfType === PitchTurfType.Grass || turfType === PitchTurfType.AstroTurf;
}
