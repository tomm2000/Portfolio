<template>
<div class="homepage">
  <div id="wrap" class="snippet-wrap">
    <div class="infocontainer">
      <div class="info-wrap"><a class="info noselect" :href="code ? code.project_url : ''">{{code ? code.project : ''}}</a></div>
      <div class="info-wrap"><a class="info noselect" :href="code ? code.file_url : ''">{{code ? code.filename : ''}}</a></div>
      <div class="info-wrap"><a class="info noselect">{{code ? code.lang : ''}}</a></div>
    </div>
    <pre id="code" class="snippet noselect" />
  </div>
</div>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
// import { highlight, highlightAll, languages } from 'prismjs'
import Prism from 'prismjs'
import { code_snippet, code_snippets } from '@/misc/snippets';

type dataType = {
  code: code_snippet | undefined,
  index: number,
}

export default Vue.extend({
  data: (): dataType => { return {
    code: undefined,
    index: 60
  }},
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', 0)

    this.new_snippet()
    this.update_snippet()
  },
  methods: {
    update_snippet() {
      if(!this.code) { return }

      const code = this.code.src.substring(0, this.index)
      this.index += 1

      let html = Prism.highlight(code, Prism.languages.javascript, 'javascript')

      const element = document.getElementById('code')!

      element.innerHTML = html

      element.scrollTop = element.scrollHeight


      if(this.index <= this.code.src.length) {
        setTimeout(() => {
          requestAnimationFrame(this.update_snippet)
        }, 100);
      } else {
        this.new_snippet()

        setTimeout(() => {
          requestAnimationFrame(this.update_snippet)
        }, 10000);
      }
    },
    new_snippet() {
      this.index = 0
      this.code = code_snippets[Math.floor(Math.random() * code_snippets.length)]
    }
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
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1;

      overflow-x: scroll;
      
    }
  }
}
</style>