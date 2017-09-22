/**
 * Returns true if s1 is a rotation of s2
 * @param {String} s1
 * @param {String} s2
 * @return {String}
 */
module.exports = function isRotation(s1, s2) {
    let s1Index = 0, 
        s2Index = 0,
        length = s1.length,
        start = 0

    if (length !== s2.length) return false // string of different lengths can't be rotations
    if (s1 === s2) return true // equal strings are rotations

    // The approach is to test each index in the first string to see if it is the start of a wrapped
    // version of the second string. If we reach the end of the first string without finding a wrapped 
    // version of the second string the two strings aren't rotations.

    while (start < length) {
        if (s1[(start + s1Index) % length] === s2[s2Index]) {
            s1Index++
            s2Index++
        } else {
            s1Index = s2Index = 0
            start++
        }

        if (s2Index == length) return true
    }

    return false
}