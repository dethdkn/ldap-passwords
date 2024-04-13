/**
 * @function
 * Encrypt a plain text password with the Ldap MD5 algorithm.
 * Keep in mind that MD5 is not considered a secure hashing algorithm for storing passwords, as it is vulnerable to various attacks.
 *
 * @param {string} textPassword - Plain text password.
 * @returns {string} - Encrypted password with the Ldap MD5 algorithm.
 *
 *
 * @example
 * const encryptedPassword = md5('mySuperSecretPassword')
 * // return {MD5}aTVgaG9NWR2N1eNABkQgYQ==
 *
 */
export declare function md5(textPassword: string): string

/**
 * @function
 * Verify passwords encrypted with MD5.
 * Keep in mind that MD5 is not considered a secure hashing algorithm for storing passwords, as it is vulnerable to various attacks.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string | string[]} md5Password - String or Array of strings to be compared to the plain text password.
 *
 * @example
 * const isValid = verifyMD5('mySuperSecretPassword', arrayOfMD5Passwords)
 * // return true or false
 */
export declare function verifyMD5(textPassword: string, md5Password: string | string[]): boolean