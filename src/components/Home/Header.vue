<template>
  <header class="welcome-section" id="welcome-section">
    <div class="forest"></div>
    <div class="silhouette"></div>
    <div class="moon"></div>
    <div class="container">
      <h1>
        <span class="line"> MyPortfolio </span>
        <span class="line"> <span class="color">-dafunk</span></span>
      </h1>
      <div class="buttons">
        <a href="#projects">作品集</a>
        <a href="#contact" class="cta">联系我</a>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "./theme.scss";

// Header
.welcome-section {
  background: #202736;
  background: linear-gradient(to bottom, #181d23 0%, #202736 80%);
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  z-index: 1;
  &::before {
    content: "";
    position: fixed;
    background: url(./headerSvg/Stars.svg);
    background-attachment: fixed;
    width: 100%;
    min-height: 100vh;
    z-index: -1;
    opacity: 0;
    animation: stars-move-in 1000ms 300ms forwards;
  }
  @keyframes stars-move-in {
    from {
      background-position-y: -100px;
    }
    to {
      opacity: 1;
      background-position-y: 0;
    }
  }
  .forest {
    position: absolute;
    bottom: -300px;
    left: 0;
    background: url(./headerSvg/Trees.svg) bottom left repeat-x;
    /* background-position-x: 100px; */
    background-size: cover;
    width: 100%;
    height: 80%;
    opacity: 0;
    animation: forest-move-in 1000ms 500ms forwards;
    border-bottom: 300px solid #181d23;
  }
  @keyframes forest-move-in {
    from {
      background-position-y: 150%;
    }
    to {
      opacity: 1;
      background-position-y: 100%;
    }
  }
  .silhouette {
    position: absolute;
    bottom: 0;
    left: 0;
    background: url(./headerSvg/Silhouette.svg) bottom left no-repeat;
    width: 50%;
    height: 50%;
    opacity: 0;
    animation: silhouette-move-in 1000ms 800ms forwards;
  }

  @keyframes silhouette-move-in {
    from {
      background-position-x: 0;
    }
    to {
      opacity: 1;
      background-position-x: 50%;
    }
  }

  .moon {
    position: absolute;
    top: 0;
    right: 0;
    position: fixed;
    background: url(./headerSvg/Moon.svg) right 150% no-repeat;
    background-size: 40% 40%;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    animation: moon-move-in 1.2s 1s forwards;
  }

  @keyframes moon-move-in {
    from {
      opacity: 0;
      background-position: right 150%;
    }
    to {
      opacity: 1;
      background-position: top right;
    }
  }

  /* Copy and CTA */
  .container {
    width: fit-content;
    position: absolute;
    right: 0;
    top: 50%;
    right: 25%;
    opacity: 0;
    transform: translate(0, -50%);
    animation: text-fade-in 1000ms 800ms forwards;

    @keyframes text-fade-in {
      from {
        right: 0;
      }
      to {
        opacity: 1;
        right: 25%;
      }
    }
    h1 {
      font-size: 4rem;
      font-weight: normal;
      font-style: italic;
      color: $primary-color;
      line-height: 3rem;
      .line:first-child {
        margin-left: 1rem;
      }
      .line:last-child {
        margin-left: 2rem;
      }
    }

    .buttons {
      display: flex;
      margin-top: 1rem;
      a,
      a:visited {
        width: 100%;
        padding: 1rem;
        border: 1px solid $primary-color;
        color: $primary-color;
        text-align: center;
        text-transform: uppercase;
        font-size: 1rem;
      }
      a:hover,
      a:active {
        border: 1px solid $second-color;
        transform: translateY(-2px);
        box-shadow: 0 10px 100px -20px $second-color;
      }
      a.cta,
      a.cta:visited {
        background: $second-color;
        border: 1px solid transparent;
        color: $primary-color;
        font-weight: bold;
      }
      a.cta:hover,
      a.cta:active {
        background: transparent;
        border: 1px solid $second-color;
      }
      a:first-child {
        margin-right: 1rem;
      }
    }
    .line {
      margin-top: 2rem;
      display: block;
    }

    .color {
      color: $second-color;
      font-style: italic;
    }
  }
}

@media only screen and (max-width: 649px) {
  .welcome-section .container {
    right: 50%;
    top: 10%;
    width: 80%;
    transform: translate(50%, 0);
    animation: text-fade-in 1000ms 800ms forwards;
  }

  @keyframes text-fade-in {
    from {
      right: 0;
    }
    to {
      opacity: 1;
      right: 50%;
    }
  }

  .silhouette {
    width: 100%;
  }
}
</style>