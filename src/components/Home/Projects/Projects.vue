<template>
  <section class="projects" id="projects">
    <div class="projects-container">
      <div class="heading">
        <h3 class="title">作品集</h3>
        <p class="separator"></p>
        <p class="subtitle">这里展示了我做的一些项目和demo</p>
      </div>
      <div class="projects-wrapper">
        <Project title="个人博客" :img="blogImg" link="https://dafunk.gitee.io" repo="#">
          <small>
            build by vuepress
          </small>
          <p>
            我使用vuepress快速搭建的个人博客，记录了我前端的学习笔记，欢迎访问。😀
          </p>
        </Project>
      </div>
    </div>
  </section>
</template>

<script setup>
import Project from "./Project.vue";
import blogImg from "./projectImg/blog.jpg"

</script>

<style lang="scss" scoped>
@import "../theme.scss";
.projects {
  min-height: 100vh;
  font-size: 1.4rem;
  position: relative;
  background: #f0f0f0;
  background: linear-gradient(215deg, #f0f0f0 0%, #fafafa 100%);
  margin-top: -10rem;
  z-index: 1;
  a,
  a:visited {
    color: $second-color;
  }
  a:hover,
  a:active {
    color: #252934;
  }
  // Container
  .projects-container {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 12rem 5rem 8rem;
  }
  // Heading
  .heading .title {
    text-align: center;
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
  .heading .separator {
    background: $second-color;
    width: 150px;
    height: 2px;
    margin: 1rem auto;
  }
  .heading .subtitle {
    font-size: 1.4rem;
    text-align: center;
    width: 70%;
    margin: 0 auto;
    // text-align: justify;
  }
}

@media only screen and (max-width: 1149px) {
  .projects .project {
    grid-template-columns: 1fr 2fr;
  }
}

@media only screen and (max-width: 949px) {
  .projects .project {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 649px) {
  .projects {
    background: #f0f0f0;
  }
  .projects .projects-container {
    padding: 12rem 0 8rem;
  }
  .projects .project {
    padding: 2rem 0;
  }
}
</style>