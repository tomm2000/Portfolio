<template>
<div class="about">
  <div class="list">
    <Event date="2015 2019" info="Liceo scientifico (scienze applicate)" />
    <Event date="2018 2019" info="Scuola lavoro" />
    <Event date="2018" info="First certificate in english" />
    <Event date="2020 2022" info="Laurea triennale in informatica (università di torino)" />
    <Event date="" info="" />
    <Event date="" info="" />
    <Event date="" info="" />
    <Event date="" info="" />
    <Event date="" info="" />
  </div>
</div>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { PAGE_INDEX } from '@/misc/config'

export default Vue.extend({
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', PAGE_INDEX.about)
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.about {
  
  .list {
    max-height: 100vh;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {  display: none; } /* Chrome, Safari and Opera */

    width: 50%;
    min-width: 30em;
    scroll-snap-type: y mandatory;
    
    padding: 0 0 0 1rem;
  }
  
}


@media screen and (max-width: $mobile_width_1) {
.about {
    padding: 8rem 2rem 0 2rem;
  .list {
    width: 100%;
    min-width: 0;
    scroll-snap-type: none;
  }
}
}
</style>