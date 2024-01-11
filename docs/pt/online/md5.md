# MD5 Gerador Online

::: danger
Lembre-se de que o MD5 não é considerado um algoritmo de hash seguro para armazenamento de senhas, pois é vulnerável a diversos ataques.
:::

<script setup lang="ts">
import { ref } from 'vue'
const password = ref('')
const cryptPassword = ref('')
const error = ref(false)

async function hash() {
    cryptPassword.value = ''
    error.value = false
    try {
        const response = await fetch(`https://backend.ldap-passwords.com/md5?password=${password.value}`)
        cryptPassword.value = await response.text()
    }
    catch (error) {
        error.value = true
    }
}
</script>

<div class="form">
<div class="inputGroup">
    <input id="password" type="password" v-model="password">
    <label for="password">Senha</label>
</div>

<button class="button" @click="hash">
    Gerar
    <svg fill="currentColor" viewBox="0 0 512 512" class="icon">
        <path d="M384 200v-56a128 128 0 0 0-256 0v56H88v128c0 92.635 75.364 168 168 168s168-75.365 168-168V200Zm-224-56a96 96 0 0 1 192 0v56H160Zm232 184c0 74.99-61.01 136-136 136s-136-61.01-136-136v-96h272Z"/>
    </svg>
</button>

<p v-if="cryptPassword">{{ cryptPassword }}</p>
<p v-if="error">Algo deu errado...</p>
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
</style>
