<template>
  <section class="login">
    <form v-if="login">
      <input
        type="text"
        name="user"
        id="user"
        placeholder="user"
        v-model="tempUser.user"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        v-model="tempUser.password"
      />
      <button type="submit" @click.prevent="signin">Login</button>
      <span @click="login = false">Criar uma conta</span>
    </form>
    <form v-else>
      <input
        type="text"
        name="user"
        id="user"
        placeholder="user"
        v-model="tempUser.user"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        v-model="tempUser.password"
      />
      <button type="submit" @click.prevent="signup">Cadastrar</button>
      <span @click="login = true">Fazer login</span>
    </form>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Login",
  data() {
    return {
      login: true,
      tempUser: {
        user: null,
        password: null,
      },
    };
  },
  methods: {
    signin() {
      api.post("/user/signin", this.tempUser).then((response) => {
        this.$socket.emit("SIGNIN", response.data);
      });
    },
    signup() {
      api.post("/user/signup", this.tempUser).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<style scoped>
</style>