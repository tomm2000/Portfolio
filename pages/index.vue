<template>
<h1>! WIP PAGE (home) !</h1>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', 0)
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

h1 {
  justify-self: center;
  align-self: center;
  text-decoration: underline;
  font-size: 4em;
}

</style>