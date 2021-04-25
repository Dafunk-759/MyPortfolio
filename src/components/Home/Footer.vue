<template>
  <footer>
    <div class="wrapper">
      <h3>THANKS FOR VISITING</h3>
      <a href="https://github.com/Dafunk-759" target="blank" title="github">
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="https://dafunk.gitee.io/" target="blank" title="blog">
        <i class="fa fa-rss-square" aria-hidden="true"></i>
      </a>
      <p v-text="`© ${new Date().getFullYear()} Dafunk`"></p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
footer {
  font-size: 1rem;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  background: #fafafa;
  z-index: 9999;
  border-top: solid 1px rgb(81, 80, 80, 0.15);
  .wrapper {
    display: flex;
    width: 100%;
    padding: 2rem;
    max-width: 1400px;
    align-items: center;
    justify-content: space-between;
  }
}

@media only screen and (max-width: 649px) {
  footer .wrapper {
    flex-direction: column;
    h3 {
      padding-bottom: 0.8rem;
    }
  }
}
</style>