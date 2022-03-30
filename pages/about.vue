<template>
<div class="about">
  <div class="list">
    <Event v-for="(event, index) in event_list" :key="index"
      :title="event.title"
      :date="event.date"
      :description="event.description"
    />
  </div>
</div>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { PAGE_INDEX } from '@/misc/config'
import { EVENT_LIST } from '@/misc/data'

export default Vue.extend({
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', PAGE_INDEX.about)
  },
  data() { return { 
    event_list: EVENT_LIST
  }}
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