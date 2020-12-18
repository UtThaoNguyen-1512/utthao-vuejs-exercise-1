<template>
  <div class="todo-list">
    <form @submit.prevent="addTodo()">
      <input
        v-model="task"
        type="text"
        placeholder="Type for text a new todo"
      />
    </form>
    <div>
      <ul class="todo-list-menu">
        <li @click="click = 1">All</li>
        <li @click="click = 2">Uncompleted</li>
        <li
          @click="click = 3"
          style="border: 0; margin-right: 0; padding-right: 0"
        >
          Completed
        </li>
      </ul>
    </div>
    <div>
      <ul class="todo-list-task">
        <li v-for="(task, id) in selectAllComplete" :key="id">
          <input v-model="task.complete" type="checkbox" />
          <div v-if="!task.active">
            {{ task.title }}
          </div>
          <input v-else type="text" v-model="task.title" />
          <div>
            <button @click="task.active = !task.active">Edit</button>
            <button
              @click="
                editData({ id: task.id, title: task.title }),
                  (task.active = !task.active)
              "
            >
              save
            </button>
            <button @click="deleteTodos(task.id)">X</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="select-multi-complete">
      <input
        v-model="flag"
        id="selectAll"
        @click="selectMultiComplete"
        type="checkbox"
      />
      <label for="selectAll">Mark all as completed</label>
      <button v-if="!checkShowBtnDel">DELETE COMPLETED</button>
      <!-- <p>{{ flag }}</p> -->
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTodo"]),
    selectAllComplete() {
      if (this.click == 1) return this.getTodo;
      else if (this.click == 2) {
        return this.getTodo.filter((todo) => !todo.complete);
      } else {
        return this.getTodo.filter((todo) => todo.complete);
      }
    },
  },
  data() {
    return {
      task: "",
      id: 0,
      click: 1,
      flag: false,
    };
  },
  methods: {
    ...mapMutations(["addTodos", "deleteTodos"]),
    addTodo() {
      this.addTodos({
        id: this.getTodo.length + 1,
        title: this.task,
        complete: false,
      });
      this.task = "";
      // this.$store.commit("addTodo", task);
    },
    ...mapActions(["editData"]),
    checkShowBtnDel() {
      this.getTodo.forEach((item) => {
        if (!item.active) {
          return false;
        }
      });
      return true;
    },
  },
};
</script>

<style>
body {
  background-color: #d8d8d8;
}
.todo-list {
  padding: 20px;
}
.todo-list input[type="text"] {
  padding: 15px 0 15px 0;
  width: 100%;
}
.todo-list-menu {
  list-style-type: none;
  display: flex;
  /* width: 100%; */
  /* flex-direction: row;
  align-items: flex-end; */
  justify-content: flex-end;
}
.todo-list-menu li {
  margin-right: 30px;
  border-right: 1px solid gray;
  padding-right: 20px;
}
.todo-list-task {
  list-style-type: none;
  /* display: block;
  width: 100%; */
  padding-left: 0;
}
.todo-list-task li {
  background-color: white;
  margin-bottom: 20px;
  justify-content: space-between;
  display: flex;
  padding: 20px;
}
.select-multi-complete {
  display: flex;
  justify-content: flex-end;
}
.select-multi-complete label {
  padding: 0 10px;
}
</style>