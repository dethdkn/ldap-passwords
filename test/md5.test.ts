import { expect, it } from 'vitest'
import { md5, verifyMD5 } from '../src/main'

const password = 'mySuperSecretPassword'
const encryptedPass = '{MD5}aTVgaG9NWR2N1eNABkQgYQ=='
const anotherEncryptedPass = '{MD5}K37YiPOczJvPOxO2h1SBBw=='

it('should return a string', () => {
  const returnedPass = md5(password)
  expect(returnedPass).toBeTypeOf('string')
})

it('should return a string equals to the encrypted password', () => {
  const returnedPass = md5(password)
  expect(returnedPass).toBe(encryptedPass)
})

it('should return true', () => {
  const returnedVerification = verifyMD5(password, encryptedPass)
  expect(returnedVerification).toBe(true)
})

it('should return false', () => {
  const returnedVerification = verifyMD5(password, anotherEncryptedPass)
  expect(returnedVerification).toBe(false)
})
