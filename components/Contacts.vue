<template>
<div class="contacts">
  <div class="tag">
    <div class="icon"><img src="profilepic.png"></div>
    <div class="info">
      <div class="name">Tomm2000</div>
      <div class="extra">developer</div>
    </div>
  </div>
  <InfoTag icon="github.svg"  text="Check my github!"    link="https://github.com/tomm2000" color="#36AF81" />
  <InfoTag icon="mail.svg"    text="Contact via Email"   link="mailto:tommasofogliobonda.tfb@gmail.com" color="#EE5656" />
  <InfoTag icon="discord.svg" text="Contact via discord" link="https://discordapp.com/users/190543027121553409" color="#1E75FF" />
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.contacts {
  border: 1px solid black;
  border-bottom: 0;
  // background: linear-gradient(180deg, rgba(47,47,62,1) 0%, rgba(47,47,62,1) 50%, rgba(47,47,62,0) 100%);
  background: $color_background_light;

  border-radius: .7rem .7rem 0 0;

  // width: 100%;
  // height: 100%;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;

  // margin: 3rem 3rem 0 0;

  .tag {
    // background: red;
    height: 3rem;
    width: 100%;
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

    .icon {
      font-size: 2rem;
      background: #353542;
      border-radius: 50%;
      border: 1px solid black;
      width: 3rem;
      height: 3rem;
      text-align: center;

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
}
</style>