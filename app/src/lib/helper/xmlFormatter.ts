/**
 * Escapes XML special characters in a given string.
 *
 * @param {string} unsafe - The string to escape.
 * @return {string} The escaped string.
 */
export function escapeXml(unsafe :string): string {
    // only escape the chars if they are part of a string of a child element

    // @ts-ignore do not know what i am doing here
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}