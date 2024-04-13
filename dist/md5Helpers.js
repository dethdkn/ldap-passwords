import { Buffer } from 'node:buffer';
import { createHash } from 'node:crypto';
export default function (textPassword) {
    const md5Hash = createHash('md5');
    md5Hash.update(textPassword, 'utf-8');
    const md5Raw = md5Hash.digest('hex');
    const md5HexBuffer = Buffer.from(md5Raw, 'hex');
    const md5B64 = md5HexBuffer.toString('base64');
    return `{MD5}${md5B64}`;
}
//# sourceMappingURL=md5Helpers.js.map