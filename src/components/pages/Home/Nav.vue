<template>
  <nav class="navbar">
    <div class="nav-wrapper">
      <p class="brand">dafunk</p>
      <a @click="click" :class="{ active: props.showMenu }" class="menu-button">
        <span></span>
      </a>
    </div>
  </nav>
</template>

<script setup>
import { defineEmit, defineProps } from "vue";

const props = defineProps({
  showMenu: Boolean,
});
const emit = defineEmit(["click"]);
const click = () => emit("click");
</script>

<style lang="scss" scoped>
@import "./theme.scss";
.navbar {
  position: fixed;
  z-index: 9999;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  &.bg-active {
    background: #181d23;
  }
  .nav-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    padding: 0 2rem;
  }
  .brand {
    font-size: 1.6rem;
    color: $primary-color;
    cursor: default;
  }
}

// Menu Button
.menu-button {
  position: relative;
  height: 22px;
  width: 30px;
  outline: none;
  cursor: pointer;
  span,
  span::before,
  span::after {
    position: absolute;
    content: "";
    width: 30px;
    height: 3px;
    background: $primary-color;
    transition: 500ms cubic-bezier(0.77, 0, 0.175, 1);
  }
  span {
    position: relative;
    display: block;
    top: 50%;
    transform: translate(0, -50%);
    &::before {
      top: -8px;
    }
    &::after {
      top: 8px;
    }
  }
  &:hover {
    span,
    span::before,
    span::after {
      background: $second-color;
    }
  }
  &.active {
    span {
      background: transparent;
    }
    span::before {
      transform: rotate(-225deg);
      top: 0px;
    }
    span::after {
      transform: rotate(225deg);
      top: 0px;
    }
  }
}

@media only screen and (max-width: 849px) {
  .navbar {
    background: #181d23aa;
  }
}
</style>