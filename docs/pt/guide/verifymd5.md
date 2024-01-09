# verifyMD5

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
import { verifyMD5 } from 'ldap-md5'
```

## ⚡️ Uso

1. Valide sua senha em texto simples com uma senha criptografada MD5:\
**A senha MD5 pode ser uma única string ou um array de strings. A senha em texto simples será comparada com cada senha sha512 e a função retornará true se alguma delas corresponder**
```ts
const isValid = verifyMD5('mySuperSecretPassword', arrayOfMD5Passwords)
// return true or false
```
