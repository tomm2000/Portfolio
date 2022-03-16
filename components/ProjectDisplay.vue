<template>
<div class="project-display">
  {{ image }}
</div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  data: () => { return {

  }},
  props: {
    image: { type: Object as PropType<string>, required: true }
  }
}
</script>

<style lang="scss" scoped>
.project-display {
  width: 20em;
  height: 20em;
}
</style>