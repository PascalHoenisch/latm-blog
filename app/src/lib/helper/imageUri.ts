import {IMAGE_SERVER_SECURITY_KEY, IMAGE_SERVER_URL} from "$env/static/private";
import crypto from 'crypto';
import url from 'url';

// todo make transformation generic, depending on the view port of the requesting device
/**
 * Generates a signed URL for an image with optional transformations.
 *
 * @param {string} [transformations='600x400/smart'] - The image transformations to apply. Defaults to '600x400/smart'.
 * @param {string} imageUri - The URI of the image to generate a signed URL for.
 * @return {string} The signed URL for the image.
 */
export function generateSignedUrl(imageUri: string, transformations: string = '600x400/smart'): string {
    const securityKey: string = IMAGE_SERVER_SECURITY_KEY;
    const imageServer: string = IMAGE_SERVER_URL;

    const urlToSign: string = `${transformations}/${imageUri}`;
    // Create a HMAC SHA1 hash and digest it as base64
    const hmac: crypto.Hmac = crypto.createHmac('sha1', securityKey);
    hmac.update(`${transformations}/${imageUri}`);
    let hash: string = hmac.digest('base64');

// Replace '+' with '-', '/' with '_' and remove trailing '='
    hash = hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

// Create the safe URL by appending the encoded_signature to the beginning of the URL
    return url.resolve(imageServer, `/${encodeURIComponent(hash)}=/${urlToSign}`);
}