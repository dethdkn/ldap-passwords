import { Buffer } from 'node:buffer'
import { createHash } from 'node:crypto'

function _(textPassword: string){
  const md5Hash = createHash('md5')
  md5Hash.update(textPassword, 'utf8')
  const md5Raw = md5Hash.digest('hex')
  const md5HexBuffer = Buffer.from(md5Raw, 'hex')
  const md5B64 = md5HexBuffer.toString('base64')
  return `{MD5}${md5B64}`
}

export function md5(textPassword: string): string{
  return _(textPassword)
}

export function verifyMD5(textPassword: string, md5Password: string | string[]): boolean{
  let isValid = false
  const md5Passwords = typeof md5Password === 'string' ? [md5Password] : md5Password
  for(const cryptPasswd of md5Passwords){
    const hashType = cryptPasswd.match(/\{([^}]+)\}/)
    if(hashType && hashType[1] === 'MD5'){
      const hashedPassword = md5(textPassword)
      if(hashedPassword === cryptPasswd) isValid = true
    }
  }
  return isValid
}
