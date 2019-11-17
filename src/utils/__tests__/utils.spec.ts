import { hasProperty } from '../utils';

describe('Object Property Test', () => {
    it('should return false if object is null', () => {
        expect(hasProperty(null, 'name')).toBeFalsy()
    });

    it('should return false if object is empty', () => {
        expect(hasProperty({}, 'name')).toBeFalsy()
    });

    it('should return true if field is contained in object', () => {
        expect(hasProperty({ name: 'Simulator' }, 'name')).toBeTruthy()
    });
});
