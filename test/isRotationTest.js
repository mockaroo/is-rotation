const assert = require('assert')
const isRotation = require('../index')

describe('isRotationTest', () => {
    it('should return false for unequal length strings', () => {
        assert.equal(isRotation("foo", "fooo"), false)
    })

    it('should return false for equal length strings with non-matching characters', () => {
        assert.equal(isRotation("foox", "food"), false)
    })

    it('should return true for the same string', () => {
        assert.equal(isRotation("telephone", "telephone"), true)
    })

    it('should return true for the same string, even when length 1', () => {
        assert.equal(isRotation("t", "t"), true)
    })

    it('should return true when one string is a rotation of another', () => {
        assert.equal(isRotation("telephone", "phonetele"), true)
    })
})