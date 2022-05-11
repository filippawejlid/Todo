<template>
  <div class="component">
    <label @click="toggleSort" class="switch">
      <span class="sort-text">Sort</span>
      <input type="checkbox" class="switch-input" id="check" />
      <span class="switch-label"></span>
      <span class="switch-handle"></span>
    </label>
    <h2>What to do</h2>
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
              <!-- <lord-icon
              src="https://cdn.lordicon.com/tkuhvozl.json"
              trigger=""
              style="width: 25px; height: 25px"
            >
            </lord-icon> -->
              &#9634;
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

export default class UndoneTodos extends Vue {
  @Prop() todos!: Todos[];
  @Prop() otherTodos!: Todos[];
  @Prop() active!: boolean;
  helper = new todoHelper();

  markAsDone(id: number) {
    this.helper.toggleBoolean(this.todos, id, this.otherTodos);
  }

  deleteTodo(id: number) {
    this.helper.deleteTodo(this.todos, id);
  }

  toggleSort() {
    let box: HTMLInputElement = document.getElementById(
      "check"
    ) as HTMLInputElement;

    if (box.checked) {
      this.todos.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      this.todos.sort((a, b) => a.timestamp - b.timestamp);
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/mixins";

h2 {
  text-align: center;
  opacity: 0.7;
}

.component {
  width: 100%;
  @include tablet {
    width: 45%;
  }

  .container {
    width: 100%;
    word-break: break-all;
    padding: 7px;

    @include tablet {
      width: 100%;
    }

    li {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      list-style: none;
      align-items: center;
      background-color: rgba(238, 187, 187, 0.174);
      border-radius: 10px;
      // font-size: 1.2rem;
    }

    .buttons {
      visibility: hidden;
      display: flex;

      span {
        color: #8a8a8a;
        font-size: 1.1rem;
        padding: 3px;
        cursor: pointer;
      }
    }

    &:hover .buttons {
      visibility: visible;
    }
  }
}

.switch {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 35px;
  height: 14px;
  padding: 3px;
  border-radius: 18px;
  cursor: pointer;
}

.switch-input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.switch-label {
  position: relative;
  display: block;
  height: inherit;
  font-family: Helvetica Neue;
  font-size: 8px;
  text-transform: uppercase;
  background: #e0e0e0;
  border-radius: inherit;
  box-shadow: (#efefef 0 0 2px 1px inset);
  transition: (0.15s ease-out);
  transition-property: (opacity background);

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    margin-top: -0.5em;
    line-height: 1;
    transition: (inherit);
  }

  &:before {
    content: attr(data-off);
    right: 6px;
    color: #bababa;
    text-shadow: 0 1px rgba(white, 0.5);
  }

  &:after {
    content: attr(data-on);
    left: 4px;
    color: white;
    text-shadow: 0 1px rgba(black, 0.2);
    opacity: 0;
  }

  .switch-input:checked ~ & {
    background: #ebb;
    box-shadow: (#fff 0 0 2px 1px inset);
    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 1;
    }
  }
}

.switch-handle {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 11px;
  height: 11px;
  background: white;
  border-radius: 10px;
  background: (linear-gradient(top, #f7f7f7, white));
  transition: (left #{0.15s ease-out});

  .switch-input:checked ~ & {
    left: 18px;
  }
}

.sort-text {
  position: absolute;
  color: #e0e0e0;
  bottom: 10px;
}
</style>
