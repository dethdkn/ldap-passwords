# verifySha512Crypt

## 1. Importe a função para seu projeto:
```ts
import { verifySha512Crypt } from 'ldap-passwords'
```

## 2. Valide sua senha em texto simples com uma senha criptografada sha512:
**A senha sha512 pode ser uma única string ou um array de strings. A senha em texto simples será comparada com cada senha sha512 e a função retornará true se alguma delas corresponder**
```ts
const isValid = verifySha512Crypt('mySuperSecretPassword', arrayOfSha512Passwords)
// return true or false
```
