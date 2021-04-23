<template>
  <div
    class="nav-icon"
    :class="{ open: isOpened }"
    @click="toggleClass"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpened = ref(false);
const toggleClass = () => {
  isOpened.value = !isOpened.value
}

</script>

<style lang="scss" scoped>
.nav-icon {
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &.open span {
    &:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
    &:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }
  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #3e3e3e;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 18px;
    }
    &:nth-child(4) {
      top: 36px;
    }
  }
}
</style>