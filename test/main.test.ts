import { expect, it } from 'vitest'
import { ldapVerifyAll } from '../src/main'

const password = 'mySuperSecretPassword'

const md5Pass = '{MD5}aTVgaG9NWR2N1eNABkQgYQ=='
const anotherMD5Pass = '{MD5}K37YiPOczJvPOxO2h1SBBw=='

const sshaPass = '{SSHA}sTIysPunEI4boe6OwgQO+/tRZao2OWJIbDMvY0g2UlM='
const anotherSSHAPass = '{SSHA}BHgEJ4zHsod2o88uLGl4K+L+Rfl4SEU0dVFnWXF1S3c='

const sha512Pass = '{CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.'
const anotherSHA512Pass = '{CRYPT}$6$myDopeCustomSalt$D4JKgzmZmNroxjTQyA2MAsNvWvfxGCKVLzL1aGO0UMD24HGPiKvoZO0r899u.keezGsMdod3XSbXyOSFJv32Z1'

it('should return true for md5 valid pass', () => {
  const returnedVerification = ldapVerifyAll(password, md5Pass)
  expect(returnedVerification).toBe(true)
})

it('should return false for md5 invalid pass', () => {
  const returnedVerification = ldapVerifyAll(password, anotherMD5Pass)
  expect(returnedVerification).toBe(false)
})

it('should return true for ssha valid pass', () => {
  const returnedVerification = ldapVerifyAll(password, sshaPass)
  expect(returnedVerification).toBe(true)
})

it('should return false for ssha invalid pass', () => {
  const returnedVerification = ldapVerifyAll(password, anotherSSHAPass)
  expect(returnedVerification).toBe(false)
})

it('should return true for sha512 valid pass', () => {
  const returnedVerification = ldapVerifyAll(password, sha512Pass)
  expect(returnedVerification).toBe(true)
})

it('should return false for sha512 invalid pass', () => {
  const returnedVerification = ldapVerifyAll(password, anotherSHA512Pass)
  expect(returnedVerification).toBe(false)
})
