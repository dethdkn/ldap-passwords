# md5

::: danger
Keep in mind that MD5 is not considered a secure hashing algorithm for storing passwords, as it is vulnerable to various attacks.
:::

## 🚀 Setup

1. Install with your favorite package manager:
   - **pnpm** : `pnpm i ldap-md5`
   - npm : `npm i ldap-md5`
   - yarn : `yarn add ldap-md5`
   - bun : `bun add ldap-md5`

2. Import the function into your project:
```ts
import { md5 } from 'ldap-md5'
```

## ⚡️ Usage

1. Encrypt a plain text password using md5:
```ts
const encryptedPassword = md5('mySuperSecretPassword')
// return {MD5}aTVgaG9NWR2N1eNABkQgYQ==
```
