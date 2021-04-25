<template>
  <Menu :showMenu="showMenu" @click="toggleShowMenu" />
  <Nav :showMenu="showMenu" @click="toggleShowMenu" />
  <Header />
  <About />
  <Projects />
  <Footer />
</template>

<script setup>
import Menu from "./Menu.vue";
import Nav from "./Nav.vue";
import Header from "./Header.vue";
import About from "./About.vue";
import Projects from "./Projects/Projects.vue";
import Footer from "./Footer.vue"

import { onBeforeUnmount, onMounted, ref } from "vue";
const showMenu = ref(false);
const toggleShowMenu = () => (showMenu.value = !showMenu.value);

onMounted(() => {
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector(".welcome-section");
  const forest = document.querySelector(".forest");
  const silhouette = document.querySelector(".silhouette");
  let forestInitPos = -300;

  window.addEventListener("scroll", () => {
    let scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPos <= window.innerHeight) {
      silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
      forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
    }

    if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility =
        header.style.visibility === "hidden" && "visible";
    else header.style.visibility = "hidden";

    if (scrollPos + 100 >= window.innerHeight)
      navbar.classList.add("bg-active");
    else navbar.classList.remove("bg-active");
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll")
})
</script>

<style lang="scss" scoped>
</style>
