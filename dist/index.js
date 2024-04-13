import { verifyMD5 } from './md5.js';
import { verifySSHA } from './ssha.js';
import { verifySha512Crypt } from './sha512.js';
export function ldapVerifyAll(textPassword, hashedPassword) {
    return verifyMD5(textPassword, hashedPassword) || verifySSHA(textPassword, hashedPassword) || verifySha512Crypt(textPassword, hashedPassword);
}
export { md5, verifyMD5 } from './md5.js';
export { ssha, verifySSHA } from './ssha.js';
export { sha512Crypt, verifySha512Crypt } from './sha512.js';
//# sourceMappingURL=index.js.map