<template>
  <form @submit.prevent="">
    <input type="text" v-model="newTodo" />
    <button @click="saveTodo">
      <i class="fa-solid fa-plus"></i>
    </button>
  </form>
  <div class="lists">
    <UndoneTodos
      :todos="undoneTodos"
      :otherTodos="doneTodos"
      :active="false"
    ></UndoneTodos>
    <DoneTodos :todos="doneTodos" :otherTodos="undoneTodos"></DoneTodos>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UndoneTodos from "@/components/UndoneTodos.vue";
import DoneTodos from "@/components/DoneTodos.vue";
import { Todos } from "@/models/Todos";

@Options({
  components: {
    UndoneTodos,
    DoneTodos,
  },
})
export default class TodoList extends Vue {
  newTodo = "";

  undoneTodos: Todos[] = [];
  doneTodos: Todos[] = [];

  saveTodo() {
    if (this.newTodo.trim().length > 0) {
      let todo: Todos = new Todos(this.newTodo, false);
      this.undoneTodos.push(todo);
      this.newTodo = "";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/mixins";

form {
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 5px;
    font-size: 1.1rem;
    border: none;
    border-bottom: 1px solid rgb(141, 141, 141);
    color: rgb(68, 68, 68);

    &:focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    color: #ebb;
    font-size: 1.4rem;
    border: none;
    background-color: white;

    i:focus {
      font-size: 1.2rem;
    }
  }
}

.lists {
  width: 80%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;

  @include tablet {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 70%;
  }

  @include desktop {
    width: 50%;
  }
}
</style>
