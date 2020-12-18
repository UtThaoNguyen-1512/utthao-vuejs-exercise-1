<template>
  <nav>
    <ul class="navigation">
      <li><router-link to="/home">Home</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style>
.navigation {
  display: flex;
  list-style-type: none;
  justify-items: flex-end;
}
</style>