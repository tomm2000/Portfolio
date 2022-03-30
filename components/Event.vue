<template>
<div class="event" :class="{active}" @click="() => { active = !active }">
  <div class="background"/>
  <div class="date noselect"><span>{{ date }}</span></div>
  <div class="line-top line-wrap"><div class="track"></div></div>
  <div class="line-mid line-wrap"><div class="point">
    <div class="a"/>
    <div class="b"/>
    <div class="c"/>
  </div></div>
  <div class="line-bot line-wrap"><div class="track"></div></div>
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
  height: 10rem;
  width: 100%;
  scroll-snap-align: start;

  display: grid;
  grid-template-columns: 3rem 1fr 5fr;
  grid-template-rows: 2rem 5rem auto;

  cursor: pointer;

  transition: border-color .3s ease, height .3s ease;

  .background {
    margin: .3rem;
    border-radius: .5rem;
    grid-row: 1/4;
    grid-column: 1/4;
    z-index: -1;
    transition: background-color .3s ease;
  }

  .date {
    grid-column: 1;
    grid-row: 2;

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


  .line-wrap {
    grid-column: 2;

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
      display: grid;
      grid-template-rows: 1fr 1.5rem 1fr;

      .a {
        transition: background .3s ease;
        grid-row: 1;
        width: 3px; 
        background: $color_white_4;
        justify-self: center;
        height: 100%;
      }

      .b {
        transition: background .3s ease, border .3s ease;
        background: transparent;
        border: 3px solid $color_white_4;
        border-radius: 50%;
      }

      .c {
        transition: background .3s ease;
        grid-row: 3;
        width: 3px;
        background: $color_white_4;
        justify-self: center;
        height: 100%;
      }
    }
  }

  .line-top { grid-row: 1; }
  .line-mid { grid-row: 2; }
  .line-bot { grid-row: 3; }

  .info {
    grid-column: 3;
    grid-row: 2;

    display: flex;
    align-items: center;

    span {
      transition: color .3s ease, font-size .2s ease;
      color: $color_white_4;
      grid-column: 3;
      align-self: center;

      font-size: medium;
    }
  }
}

.event:hover {
  // border: 1px solid $color_white_5;
  grid-template-rows: 2rem 5rem auto;

  .background {
    background: $color_background_3;
  }

  .date {
    span {
      color: white;
    }
  }

  .line-wrap {
    .track { background: $color_white_1; }

    .point {
      .a { background: $color_white_1; }
      .b {
        background: $color_white_1;
        border: 3px solid $color_white_1;
      }
      .c { background: $color_white_1; }
    }
  }

  .info {
    span {
      color: $color_white_1;
      font-size: x-large;
    }
  }
}

.event.active {
  @extend .event, :hover;

  height: 20rem;
}

@media screen and (max-width: $mobile_width_1) {
.event {
  padding: 0 1rem 0 0;
  .info {
    span {
      font-size: medium;
    }
  }
}

.event:hover {
  .info {
    span {
      font-size: large;
    }
  }
}

.event.active {
  
}
}
</style>