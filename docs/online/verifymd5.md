# MD5 Online Validator

::: danger
Keep in mind that MD5 is not considered a secure hashing algorithm for storing passwords, as it is vulnerable to various attacks.
:::

<script setup lang="ts">
import { ref } from 'vue'
const md5Password = ref('')
const password = ref('')
const valid = ref<boolean | undefined>()
const error = ref(false)

async function validate() {
    valid.value = undefined
    error.value = false
    try {
        const response = await fetch(`https://backend.ldap-passwords.com/verifymd5?cryptPassword=${md5Password.value}&password=${password.value}`)
        valid.value = (await response.text()) === 'true'
    }
    catch (error) {
        error.value = true
    }
}
</script>

<div class="form">
<div class="inputGroup">
    <input id="md5Password" type="text" v-model="md5Password">
    <label for="md5Password">MD5 Password</label>
</div>
<div class="inputGroup">
    <input id="password" type="password" v-model="password">
    <label for="password">Password</label>
</div>

<button class="button" @click="validate">
    Validate
    <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
        <path fill="none" stroke="currentColor" stroke-width="2" d="M20 15c-1 1 1.25 3.75 0 5s-4-1-5 0s-1.5 3-3 3s-2-2-3-3s-3.75 1.25-5 0s1-4 0-5s-3-1.5-3-3s2-2 3-3s-1.25-3.75 0-5s4 1 5 0s1.5-3 3-3s2 2 3 3s3.75-1.25 5 0s-1 4 0 5s3 1.5 3 3s-2 2-3 3ZM7 12l3 3l7-7"/>
    </svg>
</button>

<p v-if="valid === true" class="valid">Valid Password</p>
<p v-else-if="valid === false" class="invalid">Invalid Password</p>
<p v-if="error">Something went wrong...</p>
</div>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.inputGroup {
  margin: 1em 0 1em 0;
  max-width: 190px;
  position: relative;
}

.inputGroup input {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
}

.inputGroup label {
  font-size: 100%;
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}

.inputGroup :is(input:focus, input:valid)~label {
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: #FFFFFF;
}

.dark .inputGroup :is(input:focus, input:valid)~label {
  background-color: #1B1B1F;
}

.inputGroup :is(input:focus, input:valid) {
  border-color: rgb(150, 150, 200);
}

.dark .inputGroup :is(input:focus, input:valid) {
  border-color: #565661;
}

.button {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: rgb(0 107 179);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button:hover .icon {
  transform: translate(4px);
}

.button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}

.valid {
   color: #22c55e;
}

.invalid {
    color: #ef4444;
}
</style>
