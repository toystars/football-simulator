/** Global utility functions */


/**
 * Checks if an object contains passed field
 * @function
 * @param {object} object - The object to check field in.
 * @param {string} field - The field to check in object.
 * @returns {boolean} -
 */
export function hasProperty(object: any, field: string): boolean {
    try {
        return Object.prototype.hasOwnProperty.call(object, field);
    } catch (error) {
        return false;
    }
}
