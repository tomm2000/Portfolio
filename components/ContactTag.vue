<template>
<div class="contacttag">
  <a class="text" :href="link" :style="`background: ${color}`">
    {{text}}
  </a>
  <div class="arrow-wrap">
    <svg class="arrow" width="20" height="28" viewBox="0 0 20 28" :fill="color" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3346 11.7202C19.7346 12.9177 19.7346 15.0823 18.3346 16.2798L5.7 27.0866C3.75336 28.7516 0.75 27.3684 0.75 24.8068L0.75 3.1932C0.75 0.631612 3.75335 -0.751639 5.69999 0.913389L18.3346 11.7202Z"/>
    </svg>
  </div>
  <div class="icon-wrap" >
    <div class="icon" :style="`background: ${color}`">
      <img :src="icon">
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    icon:  { type: String, required: true } as PropOptions<string>,
    color: { type: String, required: true } as PropOptions<string>,
    text:  { type: String, required: true } as PropOptions<string>,
    link:  { type: String, required: true } as PropOptions<string>,
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.contacttag {
  width: 100%;
  min-width: 9rem;
  height: 5rem;

  // align-items: center;
  // gap: .3rem;

  $size_x: 1rem;
  $size_y: .5rem;

  display: grid;
  grid-template-columns: auto $size_x $size_x $size_x $size_x $size_x $size_x $size_x $size_x $size_x;
  grid-template-rows: auto $size_y $size_y $size_y $size_y $size_y $size_y $size_y $size_y $size_y;

  margin-bottom: 1rem;

  // background: blue;

  .text {
    grid-column-start: 1;
    grid-row-start: 4;

    grid-column-end: 9;
    grid-row-end: 11;

    text-decoration: none;
    // background: red;
    height: 100%;
    border-radius: .2rem 0 .2rem .2rem;

    text-align: center;
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  .arrow-wrap {
    grid-column-start: 9;
    grid-row-start: 4;

    grid-column-end: 11;
    grid-row-end: 11;

    display: flex;
    // justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    padding-left: .2rem;
    // background: green;

    .arrow {
      scale: 1;
      transition: scale .1s ease;
    }
  }
  
  .icon-wrap {
    grid-column-start: 6;
    grid-row-start: 1;

    grid-column-end: 9;
    grid-row-end: 7;

    display: flex;
    justify-content: flex-end;

    .icon {
      width: 100%;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.contacttag:hover {
  .arrow {
    scale: 1.3;
  }

  .text {
    text-decoration: underline;
  }
}
</style>