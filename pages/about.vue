<template>
<div class="about">
  <div class="grid-wrap">
    <div class="work area">
      <div class="title-wrap"><span class="title">Work experience</span></div>
      <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga corrupti est praesentium! Asperiores voluptatum quia, quaerat labore repellendus in! Alias atque minus reprehenderit! Aperiam rem voluptas veniam sit fuga numquam.</div>
    </div>
    <div class="software area">
      <div class="title-wrap"><span class="title">Software experience</span></div>
      <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae voluptatem vero sunt dignissimos laboriosam, consectetur assumenda eos sapiente, necessitatibus repellat adipisci perspiciatis odit obcaecati animi exercitationem! Reiciendis, optio suscipit.</div>
    </div>
    <div class="language area">
      <div class="title-wrap"><span class="title">Language Skills</span></div>
      <div class="lang-wrap ita">
        <span class="title">Italiano</span>
        <div class="meter-wrap"><img src="ita_meter.svg" alt="" srcset=""></div>
      </div>
      <div class="lang-wrap eng">
        <span class="title">English <a href="https://drive.google.com/file/d/1R83mDlftbLmNc6imwXkxLWSWmRl7OuPo/view?usp=sharing">[result]</a></span>
        <div class="meter-wrap"><img src="eng_meter.svg" alt="" srcset=""></div>
      </div>
    </div>
    <div class="education area">
      <div class="title-wrap"><span class="title">Education</span></div>
      <div class="list-wrap">
        <ul class="list">
          <li><div class="point"/><span class="text">Diploma, liceo scientifico opzione scienze applicate</span></li>
          <li><div class="point"/><span class="text">Laureando triennale all’università di Torino, percorso informatico</span></li>
          <li><div class="point"/><span class="text">Patentino della robotica con l’azienda ‘COMAU’</span></li>
        </ul>
      </div>
    </div>
    <div class="curriculum area">
      <div class="title-wrap"><span class="title">Curriculum</span></div>
      <span class="info">My CV contains personal information that i’m not confortable sharing online.</span>
      <span class="info">You can email me for a copy of it.</span>
      <div class="button"><a class="text noselect" href="mailto:tommasofogliobonda.tfb@gmail.com">Email me!</a></div>
    </div>
  </div>
</div>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { NAVBAR_LIST } from '@/misc/data'

export default Vue.extend({
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', NAVBAR_LIST.findIndex(item => item.title == 'About'))
  },
  data() { return { 
  }}
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.about {
  .grid-wrap {
    display: grid;
    grid-template:
    "a b b" 1fr
    "a b b" 1fr
    "c d e" 1fr / 1fr 1fr 1fr;
    gap: 1rem;
    padding: 2rem;

    .area {
      border: 1px solid $color_white_5;
      background: $color_background_3;
      border-radius: .5rem;
      padding: .5rem;

      .title-wrap {
        height: 3rem;
        padding: .5rem .5rem .5rem 1rem;

        .title {
          font-weight: bold;
          font-size: x-large;
        }
      }
    }

    .work { grid-area: a;}
    .software { grid-area: b;}
    .language {
      grid-area: c;
      .lang-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: 0 1rem 0 1rem;
        .title {
          a {
            text-decoration: none;
            color: $color_accent_1_1;
          }
          font-size: large;
        }

        .meter-wrap {
          img {
            width: 100%;
          }
        }
      }
    }
    .education {
      grid-area: d;
      .list-wrap {
        .list {
          padding: 0;
          margin: 0;
          li {
            display: flex;
            align-items: center;
            gap: .8rem;
            margin-bottom: .5rem;
            padding: 0 1rem 0 1rem;

            .point {
              background: $color_white_1;
              height: .5rem;
              width: .5rem;
              min-width: .5rem;
              border-radius: 50%;
            }
            .text {
              font-size: small;
            }
          }
        }
      }
    }
    .curriculum {
      grid-area: e;
      display: flex;
      flex-direction: column;

      .info {
        font-size: small;
        padding: .5rem .5rem .5rem 1rem;
      }

      .button {
        background: #D24E50;
        transition: background .5s ease;

        border-radius: .5rem;
        padding: .5rem;
        margin-top: 1rem;
        width: fit-content;
        height: fit-content;
        justify-self: center;
        align-self: center;

        cursor: pointer;

        a {
          text-decoration: none;
          padding: 1rem;
          color: $color_background_1;
          font-weight: bold;
        }

        &:hover {
          background: #ff6b6d;
        }
      }
    } 
  }
}

@media screen and (max-width: $mobile_width_2) {
.about {
  padding-top: 5rem;
  .grid-wrap {
    border-top: 1px solid $color_white_3;
    max-height: 100%;
    grid-template:
    "a" 30rem
    "b" 30rem
    "c" 15rem
    "d" 15rem
    "e" 15rem;

    overflow-y: scroll;
    // padding-bottom: 1rem;
    padding-bottom: 5rem;
  }
}
}
</style>