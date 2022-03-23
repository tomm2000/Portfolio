<template>
<div class="layout_main">
  <Nuxt class="content" />
  <div class="navbar_wrapper" :class="`${mode}`">
    <Navbar :switchMode="switchMode" :mode="mode" class="navbar" />
    <Contacts :switchMode="switchMode" :mode="mode" class="contacts" />
  </div>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export type menuModes = 'navigate' | 'contact'

type dataType = {
  mode: menuModes
}

export default Vue.extend({
  data: (): dataType => { return {
    mode: 'navigate'
  }},
  methods: {
    switchMode() {
      this.mode = this.mode == 'navigate' ? 'contact' : 'navigate'
    }
  }
})
</script>

<style lang="scss" scoped>
.layout_main {
  display: grid;
  grid-template-columns: auto 20rem;

  height: 100vh;

  .content {
  }

  .navbar_wrapper {
    height: 100vh;
    width: 20rem;

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
      bottom: -76%;
    }
  }
  
  .contact {
    .navbar {
      top: -76%;
    }

    .contacts {
      bottom: 0;
    }
  }
}
</style>