<template>
  <b-container>
    <Navbar />
    <router-view/>
  </b-container>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style>
a:link {
  text-decoration: none;
}
</style>
