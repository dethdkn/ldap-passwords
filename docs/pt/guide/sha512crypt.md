# sha512Crypt

## 🚀 Configuração

1. Instale com seu gerenciador de pacotes favorito:
   - **pnpm** : `pnpm i ldap-sha512`
   - npm : `npm i ldap-sha512`
   - yarn : `yarn add ldap-sha512`
   - bun : `bun add ldap-sha512`

2. Importe a função para seu projeto:
```ts
import { sha512Crypt } from 'ldap-sha512'
```

## ⚡️ Uso

1. Criptografe uma senha de texto simples para sha512 com um salt aleatório:
```ts
const encryptedPassword = sha512Crypt('mySuperSecretPassword')
// return {CRYPT}$6$NQgPVC0up/oNVCb4$Aduz92Zfo/PFDE/XhvA3QmSqHquqdNiCdZvc9N5/UTpEUepMdd/6Mq/TeoM07wvyxHpg8ELGVzTWZt2e7Z9LY/
```

2. Criptografe uma senha de texto simples para sha512 com um salt personalizado::\
**O tamanho máximo do salt é de 16 caracteres**
```ts
const encryptedPassword = sha512Crypt('mySuperSecretPassword', 'myDopeCustomSalt')
// return {CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.
```
