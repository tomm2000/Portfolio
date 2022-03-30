<template>
<h1>Work In Progress!</h1>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { PAGE_INDEX } from '~/misc/config'

export default Vue.extend({
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', PAGE_INDEX.blog)
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

h1 {
  justify-self: center;
  align-self: center;
  font-size: 4em;
}

</style>