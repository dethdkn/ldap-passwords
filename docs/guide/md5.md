# md5

::: danger
Keep in mind that MD5 is not considered a secure hashing algorithm for storing passwords, as it is vulnerable to various attacks.
:::

## 1. Import the function into your project:
```ts
import { md5 } from 'ldap-passwords'
// OR
import { md5 } from 'ldap-md5'
```

## 2. Encrypt a plain text password using md5:
```ts
const encryptedPassword = md5('mySuperSecretPassword')
// return {MD5}aTVgaG9NWR2N1eNABkQgYQ==
```
