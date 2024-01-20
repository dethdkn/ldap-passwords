# verifySSHA

## 1. Import the function into your project:
```ts
import { verifySSHA } from 'ldap-passwords'
// OR
import { verifySSHA } from 'ldap-sha'
```

## 2. Validate your plain text password with a SSHA encrypted password:
**The SSHA password can be either a single string or an array of strings. The plain text password will be compared to each SSHA password and the function will return true if any of them matches**
```ts
const isValid = verifySSHA('mySuperSecretPassword', arrayOfSSHAPasswords)
// return true or false
```
