<template>
  <div class="menu-container" :class="props.showMenu ? 'deactive' : 'active'">
    <div class="overlay">
      <div class="menu-items">
        <ul>
          <li><a @click="click" href="#welcome-section"> 主页</a></li>
          <li><a @click="click" href="#about">关于</a></li>
          <li><a @click="click" href="#projects">作品集</a></li>
          <li><a @click="click" href="#contact">联系我</a></li>
        </ul>
      </div>
    </div>
  </div>
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
//Overlay Layer
.menu-container {
  & .overlay,
  &.active .overlay {
    position: absolute;
    right: 0;
    height: calc(100vh - 120px);
    width: calc(100vw - 120px);
    background: #fafafa;
  }
  &.active .overlay {
    animation: overlay-slide-in 300ms forwards 300ms;
  }
  @keyframes overlay-slide-in {
    from {
      width: calc(100vw - 120px);
    }
    to {
      width: 0;
    }
  }
  .overlay {
    animation: overlay-slide-out 300ms forwards;
  }
  @keyframes overlay-slide-out {
    from {
      left: 0;
      width: 0;
    }
    to {
      left: 0;
      width: calc(100vw - 120px);
    }
  }
}

//Menu Layer
.menu-container {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #202934;
  border: 60px solid #181d23;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  // 这里的 before，after 不太懂要干嘛？
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100vh;
    z-index: -1;
  }
  &:before {
    background: url(assets/home/Stars.svg);
  }
  &:after {
    background: url(assets/home/Trees.svg) bottom repeat-x;
  }
  // 失效动画
  &.deactive {
    animation: fade-out 600ms forwards;
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
      z-index: 999;
    }
    50% {
      opacity: 1;
      z-index: 999;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }
  // 生效动画
  &.active {
    animation: fade-in 300ms forwards;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
      z-index: -1;
    }
    to {
      opacity: 1;
      z-index: 999;
    }
  }

  // Menu Items: Animation
  ul,
  .social {
    margin-left: -80px;
    opacity: 0;
    animation: slide-out 200ms forwards;
  }
  ul {
    list-style-type: none !important;
    font-size: 3rem;
    margin-top: 10vh;
  }
  @keyframes slide-out {
    from {
      opacity: 1;
      margin-left: 0px;
    }
    to {
      opacity: 0;
      margin-left: -80px;
    }
  }
  &.active {
    ul,
    .social {
      animation: slide-in 300ms forwards 600ms;
    }
  }
  @keyframes slide-in {
    from {
      opacity: 0;
      margin-left: 0px;
    }
    to {
      opacity: 1;
      margin-left: -50vw;
    }
  }

  /***** Menu Items: Hover Animation *****/
  ul {
    li {
      border-left: 0.2rem solid transparent;
      transition: border-left 200ms;
      margin-bottom: 1rem;
      a {
        font-size: 3rem;
        padding-left: 0.5rem;
        &:after {
          content: " »";
          font-size: 2.5rem;
          color: transparent;
          transition: color 200ms;
        }
        &:hover:after {
          content: " »";
          color: #f300b4;
        }
      }
    }
  }

  a {
    color: #fafafa;
    &:visited {
      color: #fafafa;
    }
    &:hover {
      color: #f300b4;
    }
    &:active {
      color: #f300b4;
    }
  }
}

.social {
  padding: 1rem 0 0 0.5rem;
  a {
    font-size: 1.5rem;
    padding: 0.2rem;
  }
}

@media only screen and (max-width: 649px) {
  .menu-container {
    border: none;
    .overlay,
    &.active .overlay {
      height: 100vh;
      width: 100vw;
    }
    &.active .overlay {
      animation: overlay-slide-in 300ms forwards 300ms;
    }

    @keyframes overlay-slide-in {
      from {
        width: 100vw;
      }
      to {
        width: 0;
      }
    }

    .overlay {
      animation: overlay-slide-out 300ms forwards;
    }
    @keyframes overlay-slide-out {
      from {
        left: 0;
        width: 0;
      }
      to {
        left: 0;
        width: 100vw;
      }
    }
  }
}
</style>