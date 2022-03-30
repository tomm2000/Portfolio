<template>
<div class="homepage">
  <div class="blob-wrap">
    <img class="blob" src="blob.svg" alt="">
  </div>
  <div class="hero">
    <div class="salute"><span>Hi! I'm</span></div>
    <div class="name"><span>Tomm2000</span></div>
    <div class="bio">
      <span>I'm a software developer from Italy.</span>
    </div>
    <div class="projects-cta">
      <span>Check out my</span>
      <div class="button-wrap"><div class="button noselect" @click="() => {this.$router.push('/projects')}"><span>Projects</span></div></div>
      <span>!</span>
    </div>
  </div>
  <div id="wrap" class="snippet-wrap">
    <div class="infocontainer">
      <div class="info-wrap"><a class="info noselect" :href="code ? code.project_url : ''">{{code ? code.project : ''}}</a></div>
      <div class="info-wrap"><a class="info noselect" :href="code ? code.file_url : ''">{{code ? code.filename : ''}}</a></div>
      <div class="info-wrap"><a class="info noselect">{{code ? code.lang : ''}}</a></div>
    </div>
    <pre id="code" class="snippet noselect" :style="`overflow-y: ${scrollable ? 'scroll' : 'hidden'};`" />
  </div>
</div>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
// import { highlight, highlightAll, languages } from 'prismjs'
import Prism from '~/plugins/prism'
import { code_snippet, code_snippets } from '@/misc/snippets'
import { NAVBAR_LIST } from '~/misc/data'

type dataType = {
  code: code_snippet | undefined,
  index: number,
  last_snippet: number,
  timer: NodeJS.Timer | undefined,
  scrollable: boolean
}

export default Vue.extend({
  data: (): dataType => { return {
    code: undefined,
    index: 60,
    last_snippet: -1,
    timer: undefined,
    scrollable: false,
  }},
  methods: {
    update_snippet() {
      // there probably are much better ways than doing this, re-"compiling" the code each time a letter is added
      if(!this.code) { return }

      const code = this.code.src.substring(0, this.index)
      this.index += 1

      let html = Prism.highlight(code, Prism.languages[this.code.lang], this.code.lang)

      const element = document.getElementById('code')!

      element.innerHTML = html

      element.scrollTop = element.scrollHeight

      if(this.index <= this.code.src.length) {
        this.timer = setTimeout(() => {
          requestAnimationFrame(this.update_snippet)
        }, 100);
      } else {
        this.scrollable = true

        this.timer = setTimeout(() => {
          this.new_snippet()

          requestAnimationFrame(this.update_snippet)
        }, 20000);
      }
    },
    new_snippet() {
      this.scrollable = false
      this.index = 0

      let index = Math.floor(Math.random() * code_snippets.length)
      while(index == this.last_snippet) {
        index = Math.floor(Math.random() * code_snippets.length)
      }

      this.last_snippet = index
      this.code = code_snippets[index]
    }
  },
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', NAVBAR_LIST.findIndex(item => item.title == 'Home'))

    this.new_snippet()
    this.update_snippet()
  },
  destroyed() {
    if(this.timer) clearTimeout(this.timer)
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.homepage {
  display: grid;
  grid-template-columns: auto 30rem;
  grid-template-rows: 1fr;

  .blob-wrap {
    grid-row: 1;
    grid-column: 1;

    .blob {
      height: 40rem;
      width: 40rem;
    }
  }

  .hero {
    grid-row: 1;
    grid-column: 1;

    padding: 6rem 0 3rem 3rem;
    display: flex;
    flex-direction: column;

    .salute {
      span {
        font-size: 2rem;
    }}

    .name {
      margin-bottom: 5rem;
      span {
        font-size: 5rem;
        // text-decoration: underline;
    }}

    .bio {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 1rem;
      span {
        font-size: 2rem;
    }}

    .projects-cta {
      display: flex;

      > span {
        font-size: 2rem;
        margin: 1rem 0 1rem 0;
      }

      .button-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 10rem;

        .button {
          background: #36AF81;
          border-radius: .5rem;
          padding: .3rem;
          cursor: pointer;

          animation: pulse1 2s ease 0s infinite alternate;

          @keyframes pulse1 {
            0%   {
              background: #4fffbb;
              scale: 0.9;
            }
            100% {
              background: #36AF81;
              scale: 1.1;
            }
          }

          &:hover {
            span {
              font-weight: bolder;
          }}

          span {
            font-size: 2rem;
            color: #1A1A40;
    }}}}
      
  }
  
  .snippet-wrap {
    grid-row: 1;
    grid-column: 2;

    padding: 1rem;
    margin: 2rem;
    background-color: $color_background_3;
    border: 1px solid $color_white_5;
    border-radius: .8rem;

    display: grid;
    grid-template-rows: 2.5rem auto;
    gap: 1rem;

    .infocontainer {
      grid-row: 1;
      display: flex;
      gap: 1rem;

      .info-wrap{
        text-align: center;
        display: flex;
        align-items: center;
        background: $color_white_5;
        border-radius: .3rem;
        padding: .4rem;
        cursor: pointer;
        width: fit-content;
        min-width: 4rem;
        justify-content: center;

        .info {
          color: $color_white_2;
          text-decoration: none;
        }

        &:hover {
          background: $color_white_4;
        }
      }
    }
    
    .snippet {
      border-top: 1px solid $color_white_2;
      grid-row: 2;
      height: 100%;
      padding: 0.5rem;
      margin: 0;
      background-color: transparent; 
      line-height: 1;

      overflow-x: scroll;
    }
  }
}

@media screen and (max-width: $mobile_width_3) {
  .homepage {
    .blob-wrap {
      grid-row: 1;
      grid-column: 1;

      .blob {
        height: 25rem;
        width: 25rem;
      }
    }

    .hero {
      .salute { span {
          font-size: 1rem;
      }}

      .name { span {
          font-size: 3rem;
      }}

      .bio { span {
          font-size: 1rem;
      }}

      .projects-cta {
        display: flex;

        > span {
          font-size: 1rem;
        }

        .button-wrap {
          width: 5rem;
          .button {
            span {
              font-size: 1rem;
        }}}}
    }
  }
}

@media screen and (max-width: $mobile_width_2) {
  .homepage {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25rem auto;
    padding-bottom: 4rem;

    .blob-wrap {
      grid-row: 1;
      grid-column: 1;

      .blob {
        max-height: 25rem;
        max-width: 25rem;

        display: flex;
        justify-content: flex-start;
      }
    }

    .hero {
      grid-row: 1;
      grid-column: 1;

      .salute {
        span {
          font-size: medium;
        }}

      .name {
        margin-bottom: 0;
        span {
          font-size: xx-large;
      }}

      .bio {
        // display: flex;
        // flex-direction: column;
        // gap: 2rem;
        // margin-bottom: 1rem;
        span {
          font-size: medium;
      }}

      .projects-cta {

        > span {
          font-size: medium;
        }

        .button-wrap {
          width: 6em;

          .button {

            &:hover {
              span {
            }}

            span {
              font-size: medium;
        }}}}
    }

    .snippet-wrap {
      grid-row: 2;
      grid-column: 1;
    }
  }
}
</style>