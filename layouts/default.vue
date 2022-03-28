<template>
<div class="layout_main">
  <Nuxt class="content" />
  <div class="navbar_wrapper" :class="`${mode} ${mobile_menu_active ? 'mobile-menu-active' : ''}`">
    <div class="hamburger-wrap"><img src="hamburger.svg" alt="" @click="() => {mobile_menu_active = !mobile_menu_active}"></div>
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
  mobile_menu_active: boolean
}

export default Vue.extend({
  data: (): dataType => { return {
    mode: 'navigate',
    mobile_menu_active: false
  }},
  methods: {
    switchMode() {
      this.mode = this.mode == 'navigate' ? 'contact' : 'navigate'
    }
  },
  computed: {
    selected_index() { return this.$store.getters.route_index }
  },
  watch: {
    selected_index() {
      this.mobile_menu_active = false
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.layout_main {
  display: grid;
  grid-template-columns: auto 20rem;

  height: 100vh;

  .content {
  }

  .navbar_wrapper {
    height: 100vh;
    width: 20rem;

    .hamburger-wrap {
      display: none;
    }

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

@media screen and (max-width: $mobile_width_1) {
  .layout_main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 100vh;

    .content {
      grid-column: 1;
      grid-row: 1;
    }

    .navbar_wrapper {
      grid-column: 1;
      grid-row: 1;
      background: transparent;

      z-index: 2;

      display: grid;
      grid-template-columns: 5rem auto;
      grid-template-rows: 1fr 1fr;

      justify-self: flex-end;

      height: 100vh;
      width: 20rem;

      transform: translateX(15rem);

      transition: transform .8s ease, background .8s ease;

      padding: 0 2rem 0 0;


      .hamburger-wrap {
        grid-column: 1;
        grid-row: 1;
        justify-self: center;
        height: 5rem;
        width: 5rem;
        // border: 1px solid $color_white_5;
        // background: $color_background_3;
        // border-radius: 0 0 0 .5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          transition: rotate .8s ease;
          cursor: pointer;

          animation: pulse1 1s cubic-bezier(0.165, 0.84, 0.44, 1) 0s infinite alternate;

          @keyframes pulse1 {
            0%   {
              scale: 1;
            }
            100% {
              scale: 1.1;
            }
          }
        }
      }

      .navbar {
        grid-column: 2;
        grid-row: 1;
        position: relative;
        display: flex;
        margin-top: 1rem;
      }

      .contacts {
        grid-column: 2;
        grid-row: 2;
        position: relative;
        display: flex;
      }
    }

    .navbar_wrapper.mobile-menu-active {
      background: $color_background_2;
      opacity: 0.98;
      border-left: 2px solid $color_white_5;
      transform: translateX(0);

      .hamburger-wrap {
        align-self: flex-start;
        img {
          rotate: 90deg;
        }
      }

      .navbar {
      }

      .contacts {
      }
    }

  .navigate {
    .navbar {
      top: auto;
    }

    .contacts {
      bottom: auto;
    }
  }
  
  .contact {
    .navbar {
      top: auto;
    }

    .contacts {
      bottom: auto;
    }
  }
  }
}
</style>