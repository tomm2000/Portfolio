<template>
<div class="navbar navbar-common">
  <a href="/projects" class="projects-link">projects</a>
  <div class="spacer" />
  <div class="button" :class="`${mode}`" @click="() => {switchMode()}">
    <img src="pointer.svg" />
  </div>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { menuModes } from '~/layouts/default.vue'

export default Vue.extend({
  props: {
    switchMode: { type: Function, required: true } as PropOptions<() => void>,
    mode: { type: String, required: true } as PropOptions<menuModes>
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';
@import '@/assets/css/common/navbar.scss';

.navbar {
  border-top: 0;
  border-radius: 0 0 .7rem .7rem;

  .button { margin-top: 2rem; }

  a {
    text-align: center;
  }
}
</style>