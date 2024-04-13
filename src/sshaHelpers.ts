import { Buffer } from 'node:buffer'
import { createHash, randomBytes } from 'node:crypto'

export default function (textPasswd: string, salt?: Buffer): string {
	if (!salt)
		salt = randomBytes(18)
	const hashedPassword = createHash('sha1').update(textPasswd).update(salt)
	return `{SSHA}${Buffer.concat([hashedPassword.digest(), salt]).toString('base64')}`
}
