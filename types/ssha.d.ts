/**
 * @function
 * Encrypt a plain text password with the Ldap SSHA algorithm.
 *
 * @param {string} textPassword - Plain text password.
 * @returns {string} - Encrypted password with the Ldap SSHA algorithm.
 *
 *
 * @example
 * const encryptedPassword = ssha('mySuperSecretPassword')
 * // return {SSHA}sTIysPunEI4boe6OwgQO+/tRZao2OWJIbDMvY0g2UlM=
 *
 */
export declare function ssha(textPassword: string): string

/**
 * @function
 * Verify passwords encrypted with SSHA.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string | string[]} sshaPassword - String or Array of strings to be compared to the plain text password.
 *
 * @example
 * const isValid = verifySSHA('mySuperSecretPassword', arrayOfSSHAPasswords)
 * // return true or false
 */
export declare function verifySSHA(textPassword: string, sshaPassword: string | string[]): boolean
