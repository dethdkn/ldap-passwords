# verifySha512

## 🚀 Setup

1. Install with your favorite package manager:
   - **pnpm** : `pnpm i ldap-sha512`
   - npm : `npm i ldap-sha512`
   - yarn : `yarn add ldap-sha512`
   - bun : `bun add ldap-sha512`

2. Import the function into your project:
```ts
import { verifySha512 } from 'ldap-sha512'
```

## ⚡️ Usage

1. Validate your plain text password with a sha512 encrypted password:\
**The sha512 password can be either a single string or an array of strings. The plain text password will be compared to each sha512 password and the function will return true if any of them matches**
```ts
const isValid = verifySha512('mySuperSecretPassword', arrayOfSha512Passwords)
// return true or false
```
