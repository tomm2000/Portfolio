<template>
<div class="contacts navbar-common">
  <div class="button" :class="`${mode}`" @click="() => {switchMode()}">
    <img src="pointer.svg" />
  </div>
  <div class="tag">
    <div class="icon"><img src="profilepic.png"></div>
    <div class="info">
      <div class="name">Tomm2000</div>
      <div class="extra">developer</div>
    </div>
  </div>
  <ContactTag icon="github.svg"  text="Check my github!"    link="https://github.com/tomm2000" color="#36AF81" />
  <ContactTag icon="mail.svg"    text="Contact via Email"   link="mailto:tommasofogliobonda.tfb@gmail.com" color="#EE5656" />
  <ContactTag icon="discord.svg" text="Contact via discord" link="https://discordapp.com/users/190543027121553409" color="#1E75FF" />
  <div class="spacer" />
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { menuModes } from '~/layouts/default.vue'

export default Vue.extend({
  props: {
    switchMode: { type: Function, required: true } as PropOptions<() => void>,
    mode: { type: String, required: true } as PropOptions<menuModes>
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';
@import '@/assets/css/common/navbar.scss';

.contacts {
  border-bottom: 0;
  border-radius: .7rem .7rem 0 0;

  .tag {
    // background: red;
    height: 3rem;
    width: 100%;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    .icon {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    .info {

      justify-content: center;
      display: flex;
      flex-direction: column;

      .name { font-weight: 600; }
      .extra { font-weight: 100; }
    }
  }

  .button { margin-bottom: 1rem; }
}
</style>