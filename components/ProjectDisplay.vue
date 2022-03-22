<template>
<div class="project-display" ref="target" :href="link" :class="{ selected, inactive: !active, active }">
  <div class="img-wrap">
    <img draggable="false" class="noselect" :src="src" v-if="active">
  </div>
  <a :href="link" class="link"></a>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  data: () => { return {

  }},
  props: {
    active: { type: Boolean, default: true } as PropOptions<boolean>,
    selected: { type: Boolean, default: false } as PropOptions<boolean>,
    link: { type: String, required: false } as PropOptions<string>,
    src: { type: String, required: false } as PropOptions<string>,
    title: { type: String, required: false } as PropOptions<string>,
    description: { type: String, required: false } as PropOptions<string>,
    index: { type: Number, required: true } as PropOptions<number>,
    setDisplayeElement: { type: Function, required: true } as PropOptions<(element: HTMLElement | undefined, index: number) => void>
  },
  methods: {
  },
  mounted() {
    const element = this.$refs.target as HTMLElement

    if(this.active) {
      this.setDisplayeElement(element, this.index)
    } else {
      this.setDisplayeElement(undefined, this.index)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.project-display {
  width: 15rem;
  height: 15rem;
  box-sizing: border-box;

  height: 33.33vh;
  // height: 30vh;
  transition: all .3s ease;
  // transition: background .2s ease;
  // border: 1px solid white;
  scroll-snap-align: start;

  margin-left: 1rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  padding: 0;
  border-radius: 1rem;

  .img-wrap {
    grid-row: 1;
    grid-column: 1;
    padding: .8rem;

    width: 100%;
    height: 100%;

    img {
      border-radius: .8rem;
      width: 100%;
      height: 100%;

      object-fit: cover;
      pointer-events: none;
    }
  }
  
  .link {
    grid-row: 1;
    grid-column: 1;
    
    height: inherit;
    width: inherit;

    border-radius: 1rem;
    border: 2px solid transparent;
    transition: border-color .3s ease;

    pointer-events: none;
  }
}

.selected {
  background: $color_white_5;
  .link {
  pointer-events: all;

    &:hover {
      border: 2px solid $color_white_3;
      // border-width: 1px;
      cursor: pointer;
    }
  }
}

.inactive {
  .link {
    cursor: default;
  }  
}
</style>