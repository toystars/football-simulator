import { validatePitch } from '../pitch-validators.util';
import { IPitch, PitchDimensionsLength, PitchDimensionsWidth, PitchTurfType, PitchValidationError } from '../../../types';

const draftPitch: IPitch = { length: 0, width: 0 };

describe('Pitch Validator', () => {
    it('should throw PitchValidationError on empty pitch', () => {
        expect(() => validatePitch({} as any)).toThrow(PitchValidationError);
    });

    it('should throw PitchValidationError on invalid pitch length', () => {
        const testPitch: IPitch = { ...draftPitch };
        expect(() => validatePitch(testPitch)).toThrow(PitchValidationError);
    });

    it('should throw PitchValidationError on invalid pitch width', () => {
        const testPitch: IPitch = { ...draftPitch, length: PitchDimensionsLength.Min };
        expect(() => validatePitch(testPitch)).toThrow(PitchValidationError);
    });

    it('should throw PitchValidationError on pitch with invalid turf type', () => {
        const testPitch: any = {
            length: PitchDimensionsLength.Min,
            width: PitchDimensionsWidth.Min,
            turfType: 'CONCRETE'
        };
        expect(() => validatePitch(testPitch)).toThrow(PitchValidationError);
    });

    it('should return true for valid pitch', () => {
        const testPitch: any = {
            length: PitchDimensionsLength.Min,
            width: PitchDimensionsWidth.Min,
            turfType: PitchTurfType.Grass
        };
        expect(validatePitch(testPitch)).toBeTruthy();
    });
});
