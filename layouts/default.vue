<template>
<div class="layout_main">
  <Nuxt class="content" />
  <div class="navbar_wrapper navigate">
    <Navbar class="navbar" />
    <Contacts class="contacts" />
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.layout_main {
  display: grid;
  grid-template-columns: auto 20rem;

  height: 100vh;

  .content {
    // background-color: red;
  }

  .navbar_wrapper {
    height: 100vh;

    // display: flex;
    // flex-direction: column;
    // justify-content: flex-end;
    // padding: 3rem 3rem 0 0;
    // box-sizing: border-box;

    .navbar {
      position: absolute;
    }

    .contacts {
      position: absolute;
    }
  }

  .navigate {
    .navbar {
      top: 0;
    }

    .contacts {
      bottom: -20rem;
    }
  }
  
  .contact {
    .navbar {
      top: -25rem;
    }

    .contacts {
      bottom: 0;
    }
  }
}
</style>