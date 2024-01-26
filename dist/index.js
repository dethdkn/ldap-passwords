import { md5, verifyMD5 } from 'ldap-md5';
import { ssha, verifySSHA } from 'ldap-sha';
import { sha512Crypt, verifySha512 } from 'ldap-sha512';
export { md5, verifyMD5, ssha, verifySSHA, sha512Crypt, verifySha512 };
export function ldapVerifyAll(textPassword, hashedPassword) {
    return verifyMD5(textPassword, hashedPassword) || verifySSHA(textPassword, hashedPassword) || verifySha512(textPassword, hashedPassword);
}
//# sourceMappingURL=index.js.map