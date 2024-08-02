import { expect, it } from 'vitest'
import { ssha, verifySSHA } from '../src/index'

const password = 'mySuperSecretPassword'
const encryptedPass = '{SSHA}sTIysPunEI4boe6OwgQO+/tRZao2OWJIbDMvY0g2UlM='
const anotherEncryptedPass = '{SSHA}BHgEJ4zHsod2o88uLGl4K+L+Rfl4SEU0dVFnWXF1S3c='

it('should return a string', () => {
  const returnedPass = ssha(password)
  expect(returnedPass).toBeTypeOf('string')
})

it('should return true', () => {
  const returnedVerification = verifySSHA(password, encryptedPass)
  expect(returnedVerification).toBe(true)
})

it('should return false', () => {
  const returnedVerification = verifySSHA(password, anotherEncryptedPass)
  expect(returnedVerification).toBe(false)
})
