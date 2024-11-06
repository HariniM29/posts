<template>
  <NavBar>

  </NavBar>

  <main>
    <RouterView />
  </main>
</template>
<script>

import Home from './components/Home.vue';
import PostsForm from './components/PostsForm.vue';
import NavBar from './components/NavBar.vue';
import TasksList from './components/TasksList.vue';
export default {
  name: 'App',
  components: {
    Home,
    PostsForm,
    NavBar,
    TasksList
  },


 
}
</script>

<style>

</style>
