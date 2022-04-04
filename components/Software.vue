<template>
<div class="experience">
  <div class="text-wrap">
    <span class="text">
      {{ text }}
    </span>
  </div>
  <div class="image-wrap">
    <img class="image" :src="img" alt="">
  </div>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  mounted() {
  },
  data() { return { 
  }},
  props: {
    img: { type: String, required: true } as PropOptions<string>,
    text: { type: String, required: true } as PropOptions<string>,
  }
})
</script>

<style lang="scss">
@import '@/assets/css/colors.scss';

.experience {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  
  cursor: zoom-in;

  .text-wrap {
    transition: opacity .5s ease;
    opacity: 0;

    grid-row: 1;
    grid-column: 1;

    display: flex;
    padding: .5rem;
    .text { }
  }

  .image-wrap {
    transition: opacity .5s ease;
    opacity: 1;

    grid-row: 1;
    grid-column: 1;

    display: flex;
    border-radius: .3rem;

    justify-content: center;
    align-items: center;

    .image {
      object-fit: scale-down;
      overflow: hidden;
    }
  }

 &:hover {
   .text-wrap {
      opacity: 1;
   }

   .image-wrap {
      opacity: 0.05;
   }
 } 
}
</style>