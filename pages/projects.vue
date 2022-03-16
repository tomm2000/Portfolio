<template>
<div class="projects">
  <div class="list">
    <project-display v-for="(item, index) in project_list" :key="index" :image="item" />
  </div>
  <div class="description">

  </div>
</div>
</template>

<script lang="ts">
type dataType = {
  project_list: string[]
}

export default {
  data: (): dataType => { return {
    project_list: ['test', 'bevo', 'aaa', 'ciao'],
  }}
}
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: 20rem auto;
  height: 100vh;

  .list {
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {  display: none; } /* Chrome, Safari and Opera */
  }
}
</style>