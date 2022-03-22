<template>
<div class="linktag" :class="{selected}" @click="select" ref="element">
  <div class="icon-wrap"><slot /></div>
  <div class="text-wrap noselect">{{text}}</div>
</div >
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    text:  { type: String, required: true } as PropOptions<string>,
    page:  { type: String, required: true } as PropOptions<string>,
    selected: { type: Boolean, required: false } as PropOptions<boolean>,
    index: { type: Number, required: true } as PropOptions<number>,
    setSelected: { type: Function, required: true } as PropOptions<(index: number) => void>
  },
  methods: {
    select() {
      this.setSelected(this.index)
      this.$router.push(this.page)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.linktag {
  grid-column: 2;
  grid-row: 1;
  height: 4rem;

  display: grid;
  grid-template-columns: 4rem auto;
  border-radius: .6rem;

  transition: background .2s ease;

  cursor: pointer;

  .icon-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    * {
      height: 50%;
      width: 50%;
      transition: fill .2s ease;
      fill: $color_white_4;
    }
  }

  .text-wrap {
    display: flex;
    align-items: center;

    font-size: 1.3rem;
    color: $color_white_4;
    transition: color .2s ease;
  }

  &:hover {
    background: $color_white_5;
  }
}

.selected {
  .text-wrap {
    color: $color_white_1;
  }

  .icon-wrap { * {
    fill: $color_white_1;
  }}
}
</style>