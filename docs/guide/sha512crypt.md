# sha512Crypt

## 🚀 Setup

1. Install with your favorite package manager:
   - **pnpm** : `pnpm i ldap-sha512`
   - npm : `npm i ldap-sha512`
   - yarn : `yarn add ldap-sha512`
   - bun : `bun add ldap-sha512`

2. Import the function into your project:
```ts
import { sha512Crypt } from 'ldap-sha512'
```

## ⚡️ Usage

1. Encrypt a plain text password using sha512 and a random salt:
```ts
const encryptedPassword = sha512Crypt('mySuperSecretPassword')
// return {CRYPT}$6$NQgPVC0up/oNVCb4$Aduz92Zfo/PFDE/XhvA3QmSqHquqdNiCdZvc9N5/UTpEUepMdd/6Mq/TeoM07wvyxHpg8ELGVzTWZt2e7Z9LY/
```

2. Encrypt a plain text password using sha512 and a custom salt:\
**The maximum length of salt is 16 characters**
```ts
const encryptedPassword = sha512Crypt('mySuperSecretPassword', 'myDopeCustomSalt')
// return {CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.
```
