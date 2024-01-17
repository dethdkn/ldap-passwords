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

/**
 * @function
 * Encrypt a plain text password with the Ldap sha512crypt algorithm.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string} salt - Salt used to hash the password (it can't be greater than 16 characters).
 * @returns {string} - Encrypted password with the Ldap sha512crypt algorithm.
 *
 * @throws {Error} If salt length is greater than 16.
 *
 * @example
 * const encryptedPassword = sha512Crypt('mySuperSecretPassword')
 * // return {CRYPT}$6$NQgPVC0up/oNVCb4$Aduz92Zfo/PFDE/XhvA3QmSqHquqdNiCdZvc9N5/UTpEUepMdd/6Mq/TeoM07wvyxHpg8ELGVzTWZt2e7Z9LY/
 *
 * // OR
 *
 * const encryptedPassword = sha512Crypt('mySuperSecretPassword', 'myDopeCustomSalt')
 * // return {CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.
 */
export declare function sha512Crypt(textPassword: string, salt?: string): string

/**
 * @function
 * Verify passwords encrypted with sha512.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string | string[]} sha512Password - String or Array of strings to be compared to the plain text password.
 *
 * @example
 * const isValid = verifySha512('mySuperSecretPassword', arrayOfSha512Passwords)
 * // return true or false
 */
export declare function verifySha512(textPassword: string, sha512Password: string | string[]): boolean
