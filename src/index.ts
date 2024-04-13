import { Buffer } from 'node:buffer'
import { randomBytes } from 'node:crypto'
import md5Helper from './md5Helpers.js'
import sshaHelpers from './sshaHelpers.js'
import sha512Helpers from './sha512Helpers.js'

export function md5(textPassword: string): string {
	return md5Helper(textPassword)
}

export function verifyMD5(textPassword: string, md5Password: string | string[]): boolean {
	let isValid = false
	const md5Passwords = typeof md5Password === 'string' ? [md5Password] : md5Password
	for (const cryptPasswd of md5Passwords) {
		const hashType = cryptPasswd.match(/\{([^}]+)\}/)
		if (hashType && hashType[1] === 'MD5') {
			const hashedPassword = md5(textPassword)
			if (hashedPassword === cryptPasswd)
				isValid = true
		}
	}
	return isValid
}

export function ssha(textPassword: string): string {
	return sshaHelpers(textPassword)
}

export function verifySSHA(textPassword: string, sshaPassword: string | string[]): boolean {
	let isValid = false
	const sshaPasswords = typeof sshaPassword === 'string' ? [sshaPassword] : sshaPassword
	for (const cryptPasswd of sshaPasswords) {
		const hashType = cryptPasswd.match(/\{([^}]+)\}/)
		if (hashType && hashType[1] === 'SSHA') {
			const buffer = Buffer.from(cryptPasswd.slice(6), 'base64')
			const salt = Uint8Array.prototype.slice.call(buffer, 20)
			const hashedPassword = sshaHelpers(textPassword, salt)
			if (hashedPassword === cryptPasswd)
				isValid = true
		}
	}
	return isValid
}

export function sha512Crypt(textPassword: string, salt: string = ''): string {
	if (!salt)
		salt = randomBytes(16).toString('base64').substring(0, 16)
	if (salt.length > 16)
		throw new Error('The maximum length of salt is 16 characters')
	return sha512Helpers(textPassword, salt)
}

export function verifySha512(textPassword: string, sha512Password: string | string[]): boolean {
	let isValid = false
	const sha512Passwords = typeof sha512Password === 'string' ? [sha512Password] : sha512Password
	for (const cryptPasswd of sha512Passwords) {
		const hashType = cryptPasswd.match(/\{([^}]+)\}/)
		if (hashType && hashType[1] === 'CRYPT') {
			const salt = cryptPasswd.split('$')[2]
			const hashedPassword = sha512Crypt(textPassword, salt)
			if (hashedPassword === cryptPasswd)
				isValid = true
		}
	}
	return isValid
}

export function ldapVerifyAll(textPassword: string, hashedPassword: string | string[]): boolean {
	return verifyMD5(textPassword, hashedPassword) || verifySSHA(textPassword, hashedPassword) || verifySha512(textPassword, hashedPassword)
}
