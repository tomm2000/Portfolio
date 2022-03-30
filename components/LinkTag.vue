<template>
<div class="linktag" :class="{selected}" @click="select" ref="element">
  <div class="icon-wrap" v-html="icon_fix"></div>
  <div class="text-wrap noselect" :style="`color: ${selected ? 'white' : '#ffffff55'}`">{{title}}</div>
</div >
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    title:  { type: String, required: true } as PropOptions<string>,
    page:  { type: String, required: true } as PropOptions<string>,
    selected: { type: Boolean, required: false } as PropOptions<boolean>,
    index: { type: Number, required: true } as PropOptions<number>,
    icon: { type: String, required: true } as PropOptions<string>,
    setSelected: { type: Function, required: true } as PropOptions<(index: number) => void>,
    color: { type: String, required: true } as PropOptions<string>,
  },
  methods: {
    select() {
      this.setSelected(this.index)
      this.$router.push(this.page)
    }
  },
  computed: {
    icon_fix() {
      const color = this.selected ? this.color : '#ffffff55'

      let out: string = this.icon

      out = out.replace(/#COLOR/, color)

      out = out.replace(/#STYLE/, 'height: 50%; width: 50%; transition: fill .2s ease;')

      return out
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
  border-radius: .4rem;

  transition: background .2s ease;

  cursor: pointer;

  .icon-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
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
}
</style>