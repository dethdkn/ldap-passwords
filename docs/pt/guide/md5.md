# md5

::: danger
Lembre-se de que o MD5 não é considerado um algoritmo de hash seguro para armazenamento de senhas, pois é vulnerável a diversos ataques.
:::

## 1. Importe a função para seu projeto:
```ts
import { md5 } from 'ldap-passwords'
// OR
import { md5 } from 'ldap-md5'
```

## 2. Criptografe uma senha de texto simples para MD5:
```ts
const encryptedPassword = md5('mySuperSecretPassword')
// return {MD5}aTVgaG9NWR2N1eNABkQgYQ==
```
