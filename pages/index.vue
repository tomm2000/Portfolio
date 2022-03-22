<template>
<div class="homepage">
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
    this.$store.commit('CHANGE_ROUTE_INDEX', 0)

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
  
  .snippet-wrap {
    grid-column: 2;

    padding: 1rem;
    margin: 2rem;
    background-color: $color_background_5;
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
</style>