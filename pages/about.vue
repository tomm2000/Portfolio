<template>
<div class="about">
  <div class="grid-wrap">
    <div class="work area">
      <div class="title-wrap"><span class="title">Work experience</span><img class="icon" src="about/work.svg"></div>
      <div class="event-list">
        <Event date="2018" text="Experience teaching refugees microsoft office software to help them better integrate" />
        <Event date="2019" text="Experience working with the Automation & Robotics company ‘COMAU’" />
        <Event  />
        <Event  />
      </div>
    </div>
    <div class="software area">
      <div class="title-wrap"><span class="title">Software experience</span><img class="icon" src="about/software.svg"></div>
      <div class="grid-container">
        <Software class="a" img="about/office.png" :text="
        `General experience with the Microsoft Office suite and knowledge of advanced Excel features like VB macros and functions.`" />
        <Software class="b" img="about/code.png" :text="
        `Experience with multiple programming languages; mainly Java, Rust, Typescript, Javascript, HTML, CSS, C and Python.`" />
        <Software class="c" img="about/figma.png" :text="
        `Experience using a variety of online tools for designing and developing applications; like Figma, Firebase, Heroku and Github.`" />
        <Software class="d" img="about/androidstudio.png" :text="
        `Knowledge of various IDEs and text editors, mainly VScode, IntelliJ, PyCharm and Android Studio.`" />
      </div>
    </div>
    <div class="language area">
      <div class="title-wrap"><span class="title">Language Skills</span><img class="icon" src="about/language.svg"></div>
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
      <div class="title-wrap"><span class="title">Education</span><img class="icon" src="about/education.svg"></div>
      <div class="list-wrap">
        <ul class="list">
          <li><div class="point"/><span class="text">Diploma, liceo scientifico opzione scienze applicate</span></li>
          <li><div class="point"/><span class="text">Laureando triennale all’università di Torino, percorso informatico</span></li>
          <li><div class="point"/><span class="text">Patentino della robotica con l’azienda ‘COMAU’</span></li>
        </ul>
      </div>
    </div>
    <div class="curriculum area">
      <div class="title-wrap"><span class="title">Curriculum</span><img class="icon" src="about/curriculum.svg"></div>
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
    this.$store.commit('CHANGE_ROUTE_INDEX', NAVBAR_LIST.findIndex(item => item.id == 'about'))
  },
  data() { return {
    
  }},
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
    height: 100%;
    width: 100%;

    .area {
      border: 1px solid $color_white_5;
      background: $color_background_3;
      border-radius: .5rem;
      padding: .5rem;

      .title-wrap {
        height: 3rem;
        padding: .5rem .5rem .5rem 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        .title {
          font-weight: bold;
          font-size: x-large;
        }

        .icon {
          padding: .2rem;
        }
      }
    }

    .work {
      grid-area: a;
      display: flex;
      flex-direction: column;

      .event-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
      }
    }
    .software {
      grid-area: b;
      display: flex;
      flex-direction: column;

      .grid-container {
        height: 100%;
        display: grid;
        grid-template: 
          "a b" 1fr
          "c d" 1fr / 1fr 1fr;

        gap: 1rem;

        padding: 1rem;

        .a { grid-area: a; }
        .b { grid-area: b; }
        .c { grid-area: c; }
        .d { grid-area: d; }
      }
    }
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
  .grid-wrap {
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

@media screen and (max-width: $mobile_width_1) {
.about {
  padding-top: 5rem;
  .grid-wrap {
    border-top: 1px solid $color_white_3;
  }
}
}
</style>