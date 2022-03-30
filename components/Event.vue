<template>
<div class="event" :class="{active}" @click="() => { active = !active }">
  <div class="date noselect"><span>{{ date }}</span></div>
  <div class="line">
    <div class="top-wrap wrap"><div class="track"></div></div>
    <div class="mid-wrap wrap"><div class="point"></div></div>
    <div class="bottom-wrap wrap"><div class="track"></div></div>
  </div>
  <div class="info noselect"><span>{{ info }}</span></div>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type dataType = {
  active: boolean
}

export default Vue.extend({
  props: {
    date:  { type: String, required: true } as PropOptions<string>,
    info:  { type: String, required: true } as PropOptions<string>,
  },
  methods: {
  },
  data() { return {
    active: false
  }}
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.event {
  height: 20vh;
  width: 100%;
  scroll-snap-align: start;

  display: grid;
  grid-template-columns: 3rem 1fr 5fr;

  border-radius: .5rem;
  // border: 0px solid transparent;

  transition: background-color .3s ease, border-color .3s ease;

  .date {
    grid-column: 1;
    align-self: center;
    display: flex;
    justify-content: flex-end;

    span {
      transition: color .3s ease;
      color: $color_white_4;
      width: min-content;
      font-size: small;
    }
  }

  .line {
    grid-column: 2;

    display: grid;
    grid-template-rows: 1fr 1.5rem 1fr;

    .wrap {
      display: flex;
      justify-content: center;
      width: 100%;

      .track {
        width: 3px;
        transition: background .3s ease;
        background: $color_white_4;
      }

      .point {
        width: 1.5rem;
        transition: background .3s ease, border .3s ease;
        background: transparent;
        border: 3px solid $color_white_4;
        border-radius: 50%;
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    span {
      transition: color .3s ease, font-size .1s ease;
      color: $color_white_4;
      grid-column: 3;
      align-self: center;

      font-size: medium;
    }
  }
}

.event:hover {
  // border: 1px solid $color_white_5;
  background: $color_background_3;

  .date {
    span {
      color: white;
    }
  }

  .line {
    .wrap {
      .track {
        background: white;
      }

      .point {
        border: 3px solid white;
        background: white;
      }
    }
  }

  .info {
    span {
      color: white;
      font-size: x-large;
    }
  }
}

.event.active {
  height: 40vh;
}

@media screen and (max-width: $mobile_width_1) {
.event {
  padding: 0 1rem 0 0;
}
}
</style>