<template>
<h1>! WIP PAGE (about) !</h1>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', 3)
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