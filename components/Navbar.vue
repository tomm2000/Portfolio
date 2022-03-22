<template>
<div class="navbar navbar-common">
  <div class="tag-wrap">
    <LinkTag text="Home" page="/" :selected="selected[0]" :index="0" :setSelected="setSelected">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg>
    </LinkTag>
    <LinkTag text="Projects" page="/projects" :selected="selected[1]" :index="1" :setSelected="setSelected">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16">
        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
      </svg>
    </LinkTag>
    <LinkTag text="Blog" page="/blog" :selected="selected[2]" :index="2" :setSelected="setSelected">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"/>
        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
      </svg>
    </LinkTag>
    <LinkTag text="About" page="/about" :selected="selected[3]" :index="3" :setSelected="setSelected">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
        <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
    </LinkTag>
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

type dataType = {
  selected: boolean[]
}

export default Vue.extend({
  props: {
    switchMode: { type: Function, required: true } as PropOptions<() => void>,
    mode: { type: String, required: true } as PropOptions<menuModes>
  },
  data: (): dataType => { return {
    selected: [true]
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
</style>