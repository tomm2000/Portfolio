<template>
<div class="projects">
  <svg height="210" width="500" class="pointer">
    <line class="line" :x1="position.x" :y1="position.y" :x2="subline_start.x" :y2="subline_start.y" />
    <circle class="point" :cx="position.x" :cy="position.y" r="3" />
    <circle class="joint" :cx="subline_start.x" :cy="subline_start.y" r="3" />
    <line class="subline" :x1="subline_start.x" :y1="subline_start.y" :x2="subline_end.x" :y2="subline_end.y" />
  </svg>
  <div class="distance-meter" id="distance-meter"></div>
  <div id="list" class="list" @scroll="updatePositions">
    <ProjectDisplay v-for="(item, index) in project_list" :key="index"
      :src="item.src"
      :title="item.title"
      :description="item.description"
      :link="item.link"
      :setDisplayeElement="setDisplayElement"
      :index="index"
      :active="item.active"
      :selected="item.selected"
    />
  </div>
  <div class="description" @load="() => {console.log('load')}">
    <div class="wrapper">
      <div class="link"><a v-if="link != undefined" :href="link" class="noselect">click for more info!</a></div>
      <h1 id="title">{{ title }}</h1>
      <span id="desc">{{ description }}</span>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { PAGE_INDEX } from '~/misc/config'
import { projectType, PROJECT_LIST } from '~/misc/data'

type point = { x: number, y: number}

type dataType = {
  project_list: projectType[],
  title: string,
  description: string,
  link: string,

  diplayElements: (HTMLElement | undefined)[],

  position: point,
  subline_start: point,
  subline_end: point,
  scrolling: boolean,
  timeout: NodeJS.Timeout | null
}

export default Vue.extend({
  data: (): dataType => { return {
    project_list: PROJECT_LIST,
    title: '',
    description: '',
    link: '',

    diplayElements: [],

    position: { x: 0, y: 0 },
    subline_start: { x: 0, y: 0 },
    subline_end: { x: 0, y: 0 },

    scrolling: false,
    timeout: null
  }},
  methods: {
    getAttachPoint(element: HTMLElement): point {
      const width = element.clientWidth
      const height = element.clientHeight

      let x = element.offsetLeft + width / 3 * 2
      let y = element.offsetTop + height / 3 * 2

      return { x, y }
    },
    setDisplayElement(element: HTMLElement | undefined, index: number) {
      this.diplayElements[index] = element
    },
    updatePositions() {
      const list = document.getElementById('list')!
      const title = document.getElementById('desc')!
      const distance_meter = document.getElementById('distance-meter')!

      this.subline_start = {
        x: title.offsetLeft,
        y: title.offsetTop
      }

      this.subline_end = {
        x: title.offsetLeft + title.clientWidth,
        y: title.offsetTop
      }

      const distance_point: point = {
        x: distance_meter.offsetLeft,
        y: distance_meter.offsetTop
      } 

      let closest_point = this.position
      let min_distance = Number.MAX_VALUE
      let min_index = 0
      let index = 0

      for(let element of this.diplayElements) {
        if(!element) {
          index ++
          continue;
        }
        
        const point = this.getAttachPoint(element)

        point.y -= list.scrollTop

        const dist = Math.abs(point.y - distance_point.y)

        if(dist < min_distance) {
          min_distance = dist
          closest_point = point
          min_index = index
        }

        index ++
      }

      this.project_list.forEach(pr => {
        if((pr as any).selected != undefined) { (pr as any).selected = false }
      });

      (this.project_list[min_index] as any).selected = true
      this.title       = (this.project_list[min_index] as any).title
      this.description = (this.project_list[min_index] as any).description
      this.link        = (this.project_list[min_index] as any).link
      this.position = closest_point
    }
  },
  mounted() {
    this.$store.commit('CHANGE_ROUTE_INDEX', PAGE_INDEX.projects)
    
    this.updatePositions()

    const body = document.getElementsByTagName('body').item(0)!
    body.onresize = () => { this.updatePositions() }

    setTimeout(() => {
      this.updatePositions()
    }, 30);

    this.$nextTick(() => {
      this.updatePositions()
    })
  },
  
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.projects {
  display: grid;
  grid-template-columns: 0 20rem auto;
  grid-template-rows: 1fr;
  height: 100vh;

  
  .pointer {
    grid-row: 1;
    grid-column: 1;

    z-index: 1;

    width: 100vw;
    height: 100vh;
    pointer-events: none;

    .line, .subline {
      stroke: $color_white_3;
      stroke-width:2;
    }

    .point, .joint {
      stroke: $color_white_2;
      fill: white;
    }
  }

  .distance-meter {
    grid-row: 1;
    grid-column: 1/4;

    align-self: center;
  }

  .list {
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {  display: none; } /* Chrome, Safari and Opera */

    scroll-snap-type: y mandatory;

    grid-row: 1;
    grid-column: 1/4;

  }

  .description {
    grid-row: 1;
    grid-column: 3;

    display: flex;
    padding: 0 0 0 2rem;
    // justify-content: center;
    align-items: center;
    pointer-events: none;

    .wrapper {
      background: $color_background_3;
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: auto auto;

      pointer-events: all;

      border: 1px solid $color_white_5;
      border-radius: .5rem;
      padding: .7rem;
      max-width: 80%;

      .link {
        grid-row: 1;
        grid-column: 2;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: .2rem;

        a {
          text-decoration: none;
          padding: .3rem;
          border: 1px solid $color_accent_1_3;
          border-radius: .5rem;
          color: $color_accent_1_3;
          cursor: pointer;

          &:hover {
            background-color:$color_accent_1_5;
            text-decoration: underline;
          }
        }
      }

      h1 {
        grid-row: 1;
        grid-column: 1;
        padding: 0 .5rem .3rem .5rem;
        margin: 0;
      }

      span {
        grid-row: 2;
        grid-column: 1/3;
        padding: .3rem .5rem 0 .5rem;
        margin: 0;
        white-space: pre-wrap;
      }
    } 
  }
}

@media screen and (max-width: $mobile_width_1) {
  .projects {
    grid-template-columns: 1fr;
    grid-template-rows: 0 25rem auto;

    .distance-meter {
      width: 0rem;
      height: 0rem;
      grid-row: 2;
      grid-column: 1;
    }

    .pointer {
      display: none;
    }

    .list {
      grid-row: 2;
      grid-column: 1;
      margin-top: 5rem;
      padding: 0 3rem 0 3rem;
    }

    .description {
      grid-row: 3;
      grid-column: 1;
      padding: 2rem;

      display: flex;
      justify-content: center;
      justify-self: center;
      align-items: flex-start;

      .wrapper {
        width: 100%;
        max-width: 100%;
      }

      h1 {
        font-size: x-large;
      }
    }
  }
}
</style>