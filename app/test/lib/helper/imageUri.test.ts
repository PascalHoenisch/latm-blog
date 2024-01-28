// @ts-ignore because it is defined as a shortcut in the svelte config
import {generateSignedUrl} from '$lib/helper//imageUri';
import {describe, test, expect} from "vitest";
import * as process from "process";

describe('test function generateSignedUrl', () => {
    // find a way to mock the env variables IMAGE_SERVER_SECURITY_KEY and IMAGE_SERVER_URL for the coming method
    process.env.IMAGE_SERVER_SECURITY_KEY = "http://localhost:8888";
    process.env.IMAGE_SERVER_URL = 'MY_SECURE_KEY';

    test('generate a signedURL', () => {
        const imageUrl :string = 'author/nice-image.jpeg';
        const transformations :string = '600x400/smart';

        const expectedResult:string = "http://localhost:8888/ol6OfxEEOA0IAmAyukLDQtOxpCY=/600x400/smart/author/nice-image.jpeg";

        const actualResult = generateSignedUrl(imageUrl, transformations);

        expect(actualResult).toBe(expectedResult);
    });

    test('generate a signedURL with default transformations', () => {
        const imageUrl = 'author/nice-image.jpeg';
        const expectedResult = 'http://localhost:8888/ol6OfxEEOA0IAmAyukLDQtOxpCY=/600x400/smart/author/nice-image.jpeg';

        const actualResult = generateSignedUrl(imageUrl);

        expect(actualResult).toBe(expectedResult);
    });
});
