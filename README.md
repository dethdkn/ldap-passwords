<a href="http://ldap-passwords.com/">
<h1 align="center">Ldap-passwords</h1>
</a>
<p align="center">ldap-passwords offers secure password hashing and verification using LDAP password algorithms.</p>
<p align="center">
   <a href="https://www.npmjs.com/package/ldap-passwords">
      <img src="https://img.shields.io/npm/dt/ldap-passwords?color=%23c12127&label=downloads&logo=npm" alt="npm"/>
   </a>
   <a href="https://github.com/dethdkn/ldap-passwords/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/dethdkn/ldap-passwords?color=%233da639&logo=open%20source%20initiative" alt="License"/>
  </a>
   <a href="https://gitmoji.dev">
      <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67" alt="Gitmoji"/>
   </a>
   <a href="https://rosa.dev.br">
      <img src="https://img.shields.io/badge/check me!-👻-F28AA9" alt="rosa.dev.br"/>
   </a>
</p>
<h3 align="center">
   <a href="https://ldap-passwords.com/">
      📚 Full Documentation
   </a>
</h3>

## ✨ Features

- Encrypt a plain text password with Ldap passwords algorithm.
- Verify encrypted passwords.
- No external dependencies.

## 🪄 Supported Algorithms

- SHA512 CRYPT
- SSHA
- MD5

## 🚀 Setup

1. Install with your favorite package manager:
   - **pnpm** : `pnpm i ldap-passwords`
   - npm : `npm i ldap-passwords`
   - yarn : `yarn add ldap-passwords`
   - bun : `bun add ldap-passwords`

## ⚡️ SHA512 CRYPT

1. Import the function into your project:
```ts
import { sha512Crypt, verifySha512Crypt } from 'ldap-passwords'
```

2. Encrypt a plain text password using sha512 and a random salt:
```ts
const encryptedPassword = sha512Crypt('mySuperSecretPassword')
// return {CRYPT}$6$NQgPVC0up/oNVCb4$Aduz92Zfo/PFDE/XhvA3QmSqHquqdNiCdZvc9N5/UTpEUepMdd/6Mq/TeoM07wvyxHpg8ELGVzTWZt2e7Z9LY/
```

3. Encrypt a plain text password using sha512 and a custom salt:\
**The maximum length of salt is 16 characters**
```ts
const encryptedPassword = sha512Crypt('mySuperSecretPassword', 'myDopeCustomSalt')
// return {CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.
```

4. Validate your plain text password with a sha512 encrypted password:\
**The sha512 password can be either a single string or an array of strings. The plain text password will be compared to each sha512 password and the function will return true if any of them matches**
```ts
const isValid = verifySha512Crypt('mySuperSecretPassword', arrayOfSha512Passwords)
// return true or false
```

## 💡 SSHA

1. Import the function into your project:
```ts
import { ssha, verifySSHA } from 'ldap-passwords'
```

2. Encrypt a plain text password using SSHA:
```ts
const encryptedPassword = ssha('mySuperSecretPassword')
// return {SSHA}sTIysPunEI4boe6OwgQO+/tRZao2OWJIbDMvY0g2UlM=
```

3. Validate your plain text password with a MD5 encrypted password:\
**The SSHA password can be either a single string or an array of strings. The plain text password will be compared to each SSHA password and the function will return true if any of them matches**
```ts
const isValid = verifySSHA('mySuperSecretPassword', arrayOfSSHAPasswords)
// return true or false
```

## 💥 MD5

1. Import the function into your project:
```ts
import { md5, verifyMD5 } from 'ldap-passwords'
```

2. Encrypt a plain text password using md5:
```ts
const encryptedPassword = md5('mySuperSecretPassword')
// return {MD5}aTVgaG9NWR2N1eNABkQgYQ==
```

3. Validate your plain text password with a MD5 encrypted password:\
**The MD5 password can be either a single string or an array of strings. The plain text password will be compared to each MD5 password and the function will return true if any of them matches**
```ts
const isValid = verifyMD5('mySuperSecretPassword', arrayOfMD5Passwords)
// return true or false
```

## 🔍 Verify All

1. Import the function into your project:
```ts
import { ldapVerifyAll } from 'ldap-passwords'
```

2. Validate your plain text password with a MD5, SSHA or SHA512 encrypted password:
**The hashed password can be either a single string or an array of strings. The plain text password will be compared to each hashed password and the function will return true if any of them matches**
```ts
const isValid = ldapVerifyAl('mySuperSecretPassword', arrayOfHashedPasswords)
// return true or false
```

## 📝 License

Copyright © 2024 [Gabriel 'DethDKN' Rosa](https://github.com/dethdkn)\
This project is under [MIT license](https://github.com/dethdkn/ldap-passwords/blob/main/LICENSE)
