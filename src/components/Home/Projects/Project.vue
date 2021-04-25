<template>
  <div class="project">
    <a :href="props.link" target="blank" class="project-link">
      <img
        :src="props.img"
        :alt="`Screenshot of ${props.title}`"
        class="project-image"
      />
    </a>
    <div class="project-details">
      <div class="project-tile">
        {{ props.title }}
      </div>
      <slot />
      <div class="buttons">
        <a :href="props.repo">
          源码 <i class="fa fa-external-link" aria-hidden="true" />
        </a>
        <a :href="props.link" target="blank">
          线上展示 <i class="fa fa-external-link" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  img: String,
  title: String,
  link: String,
  repo: String,
});
</script>

<style lang="scss" scoped>
@import "../theme.scss";
//Single Project
.project {
  margin: 1rem auto;
  width: 70%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  .project-link {
    display: block;
    margin: auto 0;
    color: #252934;
    overflow: hidden;
    text-align: center;
    border-radius: 50%;
    border: 1px solid $primary-color;
    box-shadow: 0 20px 10px -10px #25293450;
    transition: 300ms;
    &:hover {
      box-shadow: 0 50px 15px -30px #25293450;
      img {
        filter: saturate(1);
        transform: scale(1.05);
      }
    }
  }
  .project-image {
    width: 100%;
    transform: scale(1.2);
    filter: saturate(0);
    transition: all 300ms;
  }
  .project-details {
    margin: auto 0;
    .project-tile {
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 0;
      color: $second-color;
    }
    small {
      font-style: italic;
    }
    p {
      margin: 1rem 0;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      a {
        width: 49%;
        padding: 0.5rem;
        border: none;
        border-bottom: 1px solid $second-color;
        color: #252934;
        background: $primary-color;
        font-size: 1.2rem;
        text-align: center;
        &:hover {
          background: $second-color;
          color: $primary-color;
        }
      }
      i {
        font-size: 0.8rem;
        vertical-align: middle;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>