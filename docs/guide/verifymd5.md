# verifyMD5

::: danger
Keep in mind that MD5 is not considered a secure hashing algorithm for storing passwords, as it is vulnerable to various attacks.
:::

## 1. Import the function into your project:
```ts
import { verifyMD5 } from 'ldap-passwords'
// OR
import { verifyMD5 } from 'ldap-md5'
```

## 2. Validate your plain text password with a MD5 encrypted password:\
**The MD5 password can be either a single string or an array of strings. The plain text password will be compared to each MD5 password and the function will return true if any of them matches**
```ts
const isValid = verifyMD5('mySuperSecretPassword', arrayOfMD5Passwords)
// return true or false
```
