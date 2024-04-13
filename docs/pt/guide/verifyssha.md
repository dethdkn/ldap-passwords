# verifySSHA

## 1. Importe a função para seu projeto:
```ts
import { verifySSHA } from 'ldap-passwords'
```

## 2. Valide sua senha em texto simples com uma senha criptografada SSHA:
**A senha SSHA pode ser uma única string ou um array de strings. A senha em texto simples será comparada com cada senha SSHA e a função retornará true se alguma delas corresponder**
```ts
const isValid = verifySSHA('mySuperSecretPassword', arrayOfSSHAPasswords)
// return true or false
```
