# ssha

## 1. Import the function into your project:
```ts
import { ssha } from 'ldap-passwords'
// OR
import { ssha } from 'ldap-sha'
```

## 2. Encrypt a plain text password using SSHA:
```ts
const encryptedPassword = ssha('mySuperSecretPassword')
// return {SSHA}sTIysPunEI4boe6OwgQO+/tRZao2OWJIbDMvY0g2UlM=
```
