<template>
<h1>Work In Progress!</h1>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { NAVBAR_LIST } from '~/misc/data'

export default Vue.extend({
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', NAVBAR_LIST.findIndex(item => item.title == 'Websites'))
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