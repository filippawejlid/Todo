<template>
  <header>
    <h1>What to do today?</h1>
  </header>
  <TodoList></TodoList>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoList from "@/components/TodoList.vue";

@Options({
  components: {
    TodoList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/scss/mixins";
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&family=Quicksand:wght@300");
@import url("https://fonts.googleapis.com/css2?family=Lancelot&display=swap");

body {
  margin: 0;
  padding: 0;

  h1,
  h2 {
    font-family: "Dancing Script", cursive;
  }

  * {
    font-family: "Quicksand", sans-serif;
    font-weight: 100;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      background-color: #ebb;
      width: 100%;
      text-align: center;
      padding: 10px;

      h1 {
        color: white;
        font-size: 2.1rem;
        font-weight: 100;
      }
    }
  }
}
</style>
