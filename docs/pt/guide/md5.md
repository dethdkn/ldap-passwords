# md5

::: danger
Lembre-se de que o MD5 não é considerado um algoritmo de hash seguro para armazenamento de senhas, pois é vulnerável a diversos ataques.
:::

## 🚀 Configuração

1. Importe a função para seu projeto:
   - **pnpm** : `pnpm i ldap-md5`
   - npm : `npm i ldap-md5`
   - yarn : `yarn add ldap-md5`
   - bun : `bun add ldap-md5`

2. Importe a função para seu projeto:
```ts
import { md5 } from 'ldap-md5'
```

## ⚡️ Uso

1. Criptografe uma senha de texto simples para MD5:
```ts
const encryptedPassword = md5('mySuperSecretPassword')
// return {MD5}aTVgaG9NWR2N1eNABkQgYQ==
```
