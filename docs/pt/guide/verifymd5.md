# verifyMD5

::: danger
Lembre-se de que o MD5 não é considerado um algoritmo de hash seguro para armazenamento de senhas, pois é vulnerável a diversos ataques.
:::

## 1. Importe a função para seu projeto:
```ts
import { verifyMD5 } from 'ldap-passwords'
// OR
import { verifyMD5 } from 'ldap-md5'
```

## 2. Valide sua senha em texto simples com uma senha criptografada MD5:
**A senha MD5 pode ser uma única string ou um array de strings. A senha em texto simples será comparada com cada senha MD5 e a função retornará true se alguma delas corresponder**
```ts
const isValid = verifyMD5('mySuperSecretPassword', arrayOfMD5Passwords)
// return true or false
```
