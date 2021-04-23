<template>
  <Menu :showMenu="showMenu" @click="toggleShowMenu" />
</template>

<script setup>
import Menu from "./Menu.vue";
import {ref} from "vue"
const showMenu = ref(false)
const toggleShowMenu = () => showMenu.value = !showMenu.value

</script>

<style lang="scss" scoped>
</style>
