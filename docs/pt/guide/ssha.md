# ssha

## 1. Importe a função para seu projeto:
```ts
import { ssha } from 'ldap-passwords'
// OR
import { ssha } from 'ldap-sha'
```

## 2. Criptografe uma senha de texto simples para SSHA:
```ts
const encryptedPassword = ssha('mySuperSecretPassword')
// return {SSHA}sTIysPunEI4boe6OwgQO+/tRZao2OWJIbDMvY0g2UlM=
```
