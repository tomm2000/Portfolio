<template>
<div id="layout_main">
  <Nuxt id="content" />
  <div id="navbar_wrapper"><Navbar id="navbar" /></div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#layout_main {
  display: grid;
  grid-template-columns: auto 20rem;

  height: 100vh;

  #content {
    // background-color: red;
  }

  #navbar_wrapper {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 3rem 3rem 0 0;
    box-sizing: border-box;

    #navbar {
    }
  }
  
}
</style>