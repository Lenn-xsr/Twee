<template>
  <div id="app">
    <Nav />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";

export default {
  components: { Nav },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  color: currentColor;
}

:root {
  --background-primary: #121212;
  --background-ascent: #0b0b0b;
  --background-fading: #202225d4;
  --border-fading: rgba(43, 44, 45, 0.49);
  --text-primary: rgb(217, 217, 217);
  --lighted: #5da9dd;
  --text-fading: rgb(110, 118, 125);
}

body {
  background-color: var(--background-primary);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  white-space: break-spaces;
  overflow-wrap: break-word;
  font-size: 15px;
  display: grid;
  grid-template-areas: "nav main blank" "nav main blank";
  gap: 15px;
}

main {
  display: flex;
  grid-area: main;
  justify-content: center;
}

main section {
  width: clamp(300px, 100%, 600px);
}

svg {
  width: 1.25em;
  height: 1.25em;
  fill: currentColor;
  transition-duration: 0.2s;
}

span {
  transition: all 0.2s;
}

h1 {
  color: var(--text-primary);
  padding: 15px 0;
}

.int-icon {
  margin: 10px;
  position: relative;
  width: 19px;
  height: 25px;
}

.form-control span {
  background-color: rgba(252, 140, 140, 0.685);
}

.v-enter,
.v-leave-to {
  transform: translate3d(20px, 0, 0);
}
.v-leave {
  transform: translate3d(-20px, 0, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
</style>
