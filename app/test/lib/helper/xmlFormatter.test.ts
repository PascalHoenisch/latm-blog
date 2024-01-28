// @ts-ignore because it is defined as a shortcut in the svelte config
import { escapeXml } from "$lib/helper/xmlFormatter"
import { expect, test, describe } from 'vitest'

// define the test suite
describe('escapeXml function', () => {
    // test if special XML characters are properly escaped
    test('should properly escape special XML characters in a string', () => {
        const testString = '<>&\'"';
        const expectedResult = '&lt;&gt;&amp;&apos;&quot;';
        expect(escapeXml(testString)).toBe(expectedResult)
    });

    // test if a string without special characters remains the same
    test('should not change a string without special XML characters', () => {
        const testString = 'No special characters.';
        expect(escapeXml(testString)).toBe(testString)
    });

    // test if a string with multiple occurrences of the same special character is correctly processed
    test('should correctly process a string with multiple occurrences of the same special character', () => {
        const testString = '>>>>>>';
        const expectedResult = '&gt;&gt;&gt;&gt;&gt;&gt;';
        expect(escapeXml(testString)).toBe(expectedResult)
    });
});