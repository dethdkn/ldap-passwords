import { md5, verifyMD5 } from './md5.js'
import { sha512Crypt, verifySha512Crypt } from './sha512.js'
import { ssha, verifySSHA } from './ssha.js'

export function ldapVerifyAll(textPassword: string, hashedPassword: string | string[]): boolean{
  return verifyMD5(textPassword, hashedPassword) || verifySSHA(textPassword, hashedPassword) || verifySha512Crypt(textPassword, hashedPassword)
}

export { md5, sha512Crypt, ssha, verifyMD5, verifySha512Crypt, verifySSHA }
