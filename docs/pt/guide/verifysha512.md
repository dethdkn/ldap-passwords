# verifySha512

## 1. Importe a função para seu projeto:
```ts
import { verifySha512 } from 'ldap-passwords'
// OR
import { verifySha512 } from 'ldap-sha512'
```

## 2. Valide sua senha em texto simples com uma senha criptografada sha512:\
**A senha sha512 pode ser uma única string ou um array de strings. A senha em texto simples será comparada com cada senha sha512 e a função retornará true se alguma delas corresponder**
```ts
const isValid = verifySha512('mySuperSecretPassword', arrayOfSha512Passwords)
// return true or false
```
