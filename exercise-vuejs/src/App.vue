<template>
  <!-- <header-todo></header-todo> -->
  <home-todo></home-todo>
</template>

<script>
import HomeTodo from "./views/HomeTodo.vue";
// import HeaderTodo from "./views/HeaderTodo.vue";

export default {
  components: {
    HomeTodo,
    // HeaderTodo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
