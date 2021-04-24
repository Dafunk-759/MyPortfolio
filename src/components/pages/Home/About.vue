<template>
  <section class="about" id="about">
    <div class="wrapper">
      <article>
        <div class="title">
          <h3>关于我</h3>
          <p class="separator"></p>
        </div>
        <div class="desc full">
          <p>一个自学前端的萌新。</p>
        </div>
        <div class="title">
          <h3>关于这个作品集</h3>
          <p class="separator"></p>
        </div>
        <div class="desc full">
          <p>
            整个页面的设计和样式是我从<a
              href="https://codepen.io/yagoestevez/pen/oapQEJ?editors=0010"
              >codepen<i class="fa fa-external-link" aria-hidden="true"></i></a
            >上抄的，我用vue3和scss重构了一遍，并上传到了<a
              href="https://github.com/Dafunk-759/MyPortfolio"
              >github<i class="fa fa-external-link" aria-hidden="true">。</i></a
            >
          </p>
          <p>这里主要用来展示我的个人作品集，和日常写的一些小demo。</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "./theme.scss";

.about {
  height: 100%;
  min-height: 100vh;
  font-size: 1.4rem;
  position: relative;
  background: $primary-color;
  // clip-path CSS 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。
  clip-path: polygon(0 0, 20% 5%, 100% 0, 100% 100%, 80% 95%, 0 100%);
  z-index: 5;
  background: $primary-color;
  background-attachment: fixed;

  .wrapper {
    padding: 15rem 10rem 12rem;
    height: 100%;
    min-height: 100vh;
    max-width: 1400px;
    margin: 0 auto;
  }
  article {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 3rem 0;
  }
  .title {
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 2.4rem;
    }
  }
  .separator {
    background: $second-color;
    width: 150px;
    height: 2px;
    margin: 1rem 0;
    padding: 0;
  }
  .subtitle {
    font-size: 1.6rem;
    text-align: center;
    color: inherit;
    padding-bottom: 1.5rem;
  }
  p {
    padding-bottom: 1.5rem;
    color: #555;
    line-height: 1.9rem;
  }
  .desc.full {
    grid-column-end: span 4;
    margin-bottom: 2rem;
  }
  .desc {
    grid-column-end: span 2;
    background: #ffffff;
    padding: 2rem;
    text-align: justify;
    &:hover {
      box-shadow: 3px 2px 2px $second-color-shadow;
    }
  }
}

@media only screen and (max-width: 1149px) {
  .about article {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
  .about .desc.full {
    grid-column-end: -1;
  }

  .about .desc {
    grid-column-end: -1;
  }
}
@media only screen and (max-width: 949px) {
  .about {
    clip-path: polygon(0 0, 20% 2%, 100% 0, 100% 100%, 80% 98%, 0 100%);
    background-position: top left;
    background-size: cover;
  }
}
@media only screen and (max-width: 649px) {
  .about .wrapper {
    padding: 10rem 2rem 8rem;
  }
}
</style>