<template>
  <div class="component">
    <hr />
    <br />
    <label @click="toggleSort" class="switch">
      <span class="sort-text">Sort</span>
      <input type="checkbox" class="switch-input" id="check2" />
      <span class="switch-label"></span>
      <span class="switch-handle"></span>
    </label>
    <h2>What you've done</h2>
    <div>
      <ul class="container" v-for="todo in todos" :key="todo.id">
        <li class="item">
          {{ todo.title }}

          <div class="buttons">
            <span
              @click="
                () => {
                  markAsDone(todo.id);
                }
              "
            >
              &#10003;
            </span>
            <span
              class="cross"
              @click="
                () => {
                  deleteTodo(todo.id);
                }
              "
            >
              &#10761;
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { todoHelper } from "@/helpers/todoHelpers";
import { Todos } from "@/models/Todos";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class DoneTodos extends Vue {
  @Prop() todos!: Todos[];
  @Prop() otherTodos!: Todos[];
  helper = new todoHelper();

  markAsDone(id: number) {
    this.helper.toggleBoolean(this.todos, id, this.otherTodos);
  }

  deleteTodo(id: number) {
    this.helper.deleteTodo(this.todos, id);
  }

  toggleSort() {
    let box: HTMLInputElement = document.getElementById(
      "check2"
    ) as HTMLInputElement;

    if (box.checked) {
      this.helper.sortByLetter(this.todos);
    } else {
      this.helper.sortByTimeStamp(this.todos);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/mixins";

@include tablet {
  hr,
  br {
    display: none;
  }
}
</style>
