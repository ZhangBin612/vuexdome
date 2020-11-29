<template>
  <div id="app">
      <router-link to="../State">State</router-link> |
      <router-link to="/Actions">Actions</router-link> |
      <router-link to="/Getters">Getters</router-link> |
      <router-link to="/Mutations">Mutations</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"App",
  components:{

  }
}
</script>
<style>

</style>
