export { md5, verifyMD5 } from './md5'
export { sha512Crypt, verifySha512Crypt } from './sha512'
export { ssha, verifySSHA } from './ssha'

/**
 * @function
 * Verify passwords encrypted with MD5, SSHA or SHA512 CRYPT.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string | string[]} hashedPassword - String or Array of strings to be compared to the plain text password.
 *
 * @example
 * const isValid = ldapVerifyAll('mySuperSecretPassword', arrayOfHashedPasswords)
 * // return true or false
 */
export declare function ldapVerifyAll(textPassword: string, hashedPassword: string | string[]): boolean
