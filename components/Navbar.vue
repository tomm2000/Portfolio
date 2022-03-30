<template>
<div class="navbar navbar-common">
  <div class="tag-wrap">
    <LinkTag v-for="(nav, index) in navbar_list" :key="index"
      :index="index"
      :setSelected="setSelected"
      :icon="nav.icon"
      :title="nav.title"
      :page="nav.page"
      :selected="selected[index]"
      :color="nav.color"
    />
  </div>
  <div class="spacer" />
  <div class="button" :class="`${mode}`" @click="() => {switchMode()}">
    <img src="pointer.svg" />
  </div>
  <div class="selector-wrap">
    <div class="selector" :style="`transform: translateY(${4 * selected_index}rem);`">
      <div class="bar"></div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { menuModes } from '~/layouts/default.vue'
import { PAGE_INDEX } from '~/misc/config'
import { NAVBAR_LIST } from '~/misc/data'

type dataType = {
  selected: boolean[],
  navbar_list: any
}

export default Vue.extend({
  props: {
    switchMode: { type: Function, required: true } as PropOptions<() => void>,
    mode: { type: String, required: true } as PropOptions<menuModes>
  },
  data: (): dataType => { return {
    selected: [true],
    navbar_list: NAVBAR_LIST
  }},
  methods: {
    setSelected(index: number) {
      this.$store.commit('CHANGE_ROUTE_INDEX', index)
    }
  },
  computed: {
    selected_index() { return this.$store.getters.route_index }
  },
  watch: {
    selected_index() {
      const index = this.selected_index as number
      
      this.selected = this.selected.map(() => false)
      this.selected[index] = true
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';
@import '@/assets/css/common/navbar.scss';

.navbar {
  border-top: 0;
  border-radius: 0 0 .7rem .7rem;
  padding-left: 0;

  display: grid;
  grid-template-columns: 1.5rem auto;
  grid-template-rows: auto 2.5rem;

  .tag-wrap {
    grid-column: 2;
    grid-row: 1;
  }

  .button {
    grid-column: 2;
    grid-row: 2;
    // margin-top: 2rem;
  }

  .selector-wrap {
    grid-column: 1;
    grid-row: 1;
    display: flex;


    .selector {
      transition: all .5s ease;

      height: 4rem;
      width: 100%;
      display: flex;
      // justify-content: center;
      align-items: center;

      .bar {
        background: white;
        width: 40%;
        height: 70%;
        border-radius: .5rem;
      }
    }
  }

  a {
    text-align: center;
  }
}


@media screen and (max-width: $mobile_width_1) {
  .navbar {
    .selector-wrap {
      display: none;
    }
  }
}
</style>