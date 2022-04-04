<template>
<div class="event">
  <div class="date">{{date}}</div>
  <div class="line-wrap top"><div class="line"/></div>
  <div class="line-wrap bottom"><div class="line"/></div>
  <div class="point-wrap"><div class="point"/></div>
  <div class="text">{{text}}</div>
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
    date: { type: String, required: true } as PropOptions<string>,
    text: { type: String, required: true } as PropOptions<string>,
  }
})
</script>

<style lang="scss">
@import '@/assets/css/colors.scss';

.event {
  display: grid;
  height: 5rem;
  grid-template-rows: 1fr 1rem 1fr;
  grid-template-columns: 1fr 1rem 5fr;
  column-gap: 1rem;

  .date {
    grid-row: 1/4;
    grid-column: 1;
    font-size: small;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .line-wrap {
    grid-column: 2;
    display: flex;
    justify-content: center;

    .line {
      background: $color_accent_1_1;
      width: 3px;
      height: 100%;
    }
  }

  .top {
    grid-row: 1;
  }
  .bottom {
    grid-row: 3;
  }

  .point-wrap {
    grid-column: 2;
    grid-row: 2;

    .point {
      border: 3px solid $color_accent_1_1;
      background: transparent;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .text {
    grid-row: 1/4;
    grid-column: 3;
    display: flex;
    align-items: center;
    font-size: small;
  }
}
</style>