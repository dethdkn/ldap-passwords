# ldapVerifyAll

## 1. Import the function into your project:
```ts
import { ldapVerifyAll } from 'ldap-passwords'
```

## 2. Validate your plain text password with a MD5, SSHA or SHA512 encrypted password:
**The hashed password can be either a single string or an array of strings. The plain text password will be compared to each hashed password and the function will return true if any of them matches**
```ts
const isValid = ldapVerifyAl('mySuperSecretPassword', arrayOfHashedPasswords)
// return true or false
```
