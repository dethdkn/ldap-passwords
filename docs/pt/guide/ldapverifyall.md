# ldapVerifyAll

## 1. Importe a função para seu projeto:
```ts
import { ldapVerifyAll } from 'ldap-passwords'
```

## 2. Valide sua senha em texto simples com uma senha criptografada em MD5, SSHA ou SHA512:
**A senha hasheada pode ser uma única string ou um array de strings. A senha em texto simples será comparada com cada senha hasheada e a função retornará true se alguma delas corresponder**
```ts
const isValid = ldapVerifyAl('mySuperSecretPassword', arrayOfHashedPasswords)
// return true or false
```
