<template>
  <div class="drum">
    <div class="keys">
      <div v-for="sound in sounds" :keyNum="sound.keyNum" class="key">
        <kbd>
          {{ sound.key }}
        </kbd>
        <span class="sound">
          {{ sound.name }}
        </span>
      </div>
    </div>
    <audio
      v-for="sound in sounds"
      :src="getPath(sound.name)"
      :keyNum="sound.keyNum"
    ></audio>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
const sounds = [
  {
    name: "clap",
    keyNum: "65",
    key: "A",
  },
  {
    name: "hihat",
    keyNum: "83",
    key: "S",
  },
  {
    name: "kick",
    keyNum: "68",
    key: "D",
  },
  {
    name: "openhat",
    keyNum: "70",
    key: "F",
  },
  {
    name: "boom",
    keyNum: "71",
    key: "G",
  },
  {
    name: "ride",
    keyNum: "72",
    key: "H",
  },
  {
    name: "snare",
    keyNum: "74",
    key: "J",
  },
  {
    name: "tom",
    keyNum: "75",
    key: "K",
  },
  {
    name: "tink",
    keyNum: "76",
    key: "L",
  },
];
const getPath = (name) => `assets/drum/sounds/${name}.wav`;
const playSound = (e) => {
  const audio = document.querySelector(`audio[keyNum="${e.keyCode}"]`);
  const key = document.querySelector(`div[keyNum="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};
const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};
onMounted(() => {
  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", playSound);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", playSound);
});
</script>

<style lang="scss" scoped>
.drum {
  font-size: 10px;
  background: url("assets/drum/background.jpg") bottom center;
  background-size: cover;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  .keys {
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    .key {
      border: 0.4rem solid black;
      border-radius: 0.5rem;
      margin: 1rem;
      font-size: 1.5rem;
      padding: 1rem 0.5rem;
      transition: all 0.07s ease;
      width: 10rem;
      text-align: center;
      color: white;
      background: rgba(0, 0, 0, 0.4);
      text-shadow: 0 0 0.5rem black;
      .sound {
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: #ffc600;
      }
      kbd {
        display: block;
        font-size: 4rem;
      }
    }
  }
}
.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}
</style>