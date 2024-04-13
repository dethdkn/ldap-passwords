# verifySha512

## 1. Import the function into your project:
```ts
import { verifySha512 } from 'ldap-passwords'
```

## 2. Validate your plain text password with a sha512 encrypted password:
**The sha512 password can be either a single string or an array of strings. The plain text password will be compared to each sha512 password and the function will return true if any of them matches**
```ts
const isValid = verifySha512('mySuperSecretPassword', arrayOfSha512Passwords)
// return true or false
```
