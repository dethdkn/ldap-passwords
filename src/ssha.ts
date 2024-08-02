import { Buffer } from 'node:buffer'
import { createHash, randomBytes } from 'node:crypto'

function _(textPasswd: string, customSalt?: Buffer): string{
  const salt = customSalt || randomBytes(18)
  const hashedPassword = createHash('sha1').update(textPasswd).update(salt)
  return `{SSHA}${Buffer.concat([hashedPassword.digest(), salt]).toString('base64')}`
}

export function ssha(textPassword: string): string{
  return _(textPassword)
}

export function verifySSHA(textPassword: string, sshaPassword: string | string[]): boolean{
  let isValid = false
  const sshaPasswords = typeof sshaPassword === 'string' ? [sshaPassword] : sshaPassword
  for(const cryptPasswd of sshaPasswords){
    const hashType = cryptPasswd.match(/\{([^}]+)\}/)
    if(hashType && hashType[1] === 'SSHA'){
      const buffer = Buffer.from(cryptPasswd.slice(6), 'base64')
      const salt = Uint8Array.prototype.slice.call(buffer, 20)
      const hashedPassword = _(textPassword, salt)
      if(hashedPassword === cryptPasswd) isValid = true
    }
  }
  return isValid
}
