//import in Card 
/**
 * Truncates a given text to a maximum length and appends "..." if the text exceeds this limit.
 * If the text does not exceed the maximum length, the full text is returned.
 *
 * @param {string} txt - The text to truncate.
 * @param {number} [maxTxt=30] - The maximum allowed length of the text before truncating. Defaults to 30.
 * @returns {string} The truncated text if longer than the maximum length, otherwise the full text.
 */
export function maxTxt(txt: string, maxTxt: number = 30): string {
    return txt.length > maxTxt ? `${ txt.slice(0, maxTxt) } ...`: txt;
}