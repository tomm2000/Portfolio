<template>
<div class="websites">
  <div class="grid-wrap">
    <div class="area a"></div>
    <div class="area b"></div>
    <div class="area c"></div>
    <div class="area d"></div>
  </div>
</div>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { NAVBAR_LIST } from '~/misc/data'

export default Vue.extend({
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', NAVBAR_LIST.findIndex(item => item.id == 'websites'))
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.websites {
  .grid-wrap {
    display: grid;
    grid-template: 
    "a b" 1fr
    "c d" 1fr / 1fr 1fr;
    height: 100%;
    width: 100%;
    padding: 2rem;
    gap: 1rem;

    .area {
      border: 1px solid $color_white_5;
      background: $color_background_3;
      border-radius: .5rem;
      padding: .5rem;
    }

    .a { grid-area: a; }
    .b { grid-area: b; }
    .c { grid-area: c; }
    .d { grid-area: d; }
  }
}

</style>