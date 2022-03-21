<template>
<div class="projects">
  <svg height="210" width="500" class="pointer">
    <line class="line" :x1="position.x" :y1="position.y" :x2="subline_start.x" :y2="subline_start.y" />
    <circle class="point" :cx="position.x" :cy="position.y" r="3" />
    <circle class="joint" :cx="subline_start.x" :cy="subline_start.y" r="3" />
    <line class="subline" :x1="subline_start.x" :y1="subline_start.y" :x2="subline_end.x" :y2="subline_end.y" />
  </svg>
  <div id="list" class="list" @scroll="updatePositions">
    
    <ProjectDisplay v-for="(item, index) in project_list" :key="index"
      :src="item.src"
      :title="item.title"
      :description="item.description"
      :link="item.link"

      :setText="setText"
      :setDisplayeElement="setDisplayElement"

      :index="index"
      :active="item.active"
      :selected="item.selected"
    />
  </div>
  <div class="description">
    <div class="wrapper">
      <h1 id="title">{{ title }}</h1>
      <span id="desc">{{ description }}</span>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type point = { x: number, y: number}

type normal_project_data = { selected: boolean, link: string, src: string, title: string, description: string, active?: boolean }
type empty_project_data  = { active: boolean}
type project_data = normal_project_data | empty_project_data

type dataType = {
  project_list: project_data[],
  title: string,
  description: string,

  diplayElements: (HTMLElement | undefined)[],

  position: point,
  subline_start: point,
  subline_end: point,
  scrolling: boolean,
  timeout: NodeJS.Timeout | null
}

export default Vue.extend({
  data: (): dataType => { return {
    project_list: [
      { active: false },
      { selected: false, link:'https://tomm2000.github.io/StarForge-Prototypes/', src: '/StarForge.png', title: '1 title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id magni consequatur perferendis deserunt ex asperiores exercitationem sint, aliquid, ducimus obcaecati laudantium, officia iste placeat iure. Quaerat alias ipsa itaque a? 1'},
      { selected: false, link:'https://tomm2000.github.io/StarForge-Prototypes/', src: '/StarForge.png', title: '2 title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id magni consequatur perferendis deserunt ex asperiores exercitationem sint, aliquid, ducimus obcaecati laudantium, officia iste placeat iure. Quaerat alias ipsa itaque a? 2'},
      { selected: false, link:'https://tomm2000.github.io/StarForge-Prototypes/', src: '/StarForge.png', title: '3 title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id magni consequatur perferendis deserunt ex asperiores exercitationem sint, aliquid, ducimus obcaecati laudantium, officia iste placeat iure. Quaerat alias ipsa itaque a? 3'},
      { selected: false, link:'https://tomm2000.github.io/StarForge-Prototypes/', src: '/StarForge.png', title: '4 title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id magni consequatur perferendis deserunt ex asperiores exercitationem sint, aliquid, ducimus obcaecati laudantium, officia iste placeat iure. Quaerat alias ipsa itaque a? 4'},
      { selected: false, link:'https://tomm2000.github.io/StarForge-Prototypes/', src: '/StarForge.png', title: '5 title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id magni consequatur perferendis deserunt ex asperiores exercitationem sint, aliquid, ducimus obcaecati laudantium, officia iste placeat iure. Quaerat alias ipsa itaque a? 5'},
      { selected: false, link:'https://tomm2000.github.io/StarForge-Prototypes/', src: '/StarForge.png', title: '6 title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id magni consequatur perferendis deserunt ex asperiores exercitationem sint, aliquid, ducimus obcaecati laudantium, officia iste placeat iure. Quaerat alias ipsa itaque a? 6'},
      { selected: false, link:'https://tomm2000.github.io/StarForge-Prototypes/', src: '/StarForge.png', title: '7 title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id magni consequatur perferendis deserunt ex asperiores exercitationem sint, aliquid, ducimus obcaecati laudantium, officia iste placeat iure. Quaerat alias ipsa itaque a? 7'},
      { selected: false, link:'https://tomm2000.github.io/StarForge-Prototypes/', src: '/StarForge.png', title: '8 title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id magni consequatur perferendis deserunt ex asperiores exercitationem sint, aliquid, ducimus obcaecati laudantium, officia iste placeat iure. Quaerat alias ipsa itaque a? 8'},
      { active: false }
    ],
    title: '',
    description: '',

    diplayElements: [],

    position: { x: 0, y: 0 },
    subline_start: { x: 0, y: 0 },
    subline_end: { x: 0, y: 0 },

    scrolling: false,
    timeout: null
  }},
  methods: {
    setText(title: string, description: string) {
      this.description = description
      this.title = title
    },
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

      this.subline_start = {
        x: title.offsetLeft,
        y: title.offsetTop
      }

      this.subline_end = {
        x: title.offsetLeft + title.clientWidth,
        y: title.offsetTop
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

        const dist = Math.sqrt(
          Math.pow(point.x - this.subline_start.x, 2) +
          Math.pow(point.y - this.subline_start.y, 2)
        )

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
      this.title = (this.project_list[min_index] as any).title
      this.description = (this.project_list[min_index] as any).description
      this.position = closest_point
    }
  },
  mounted() {
    this.updatePositions()
    setTimeout(() => {
      this.updatePositions()
    }, 60);
  },
})
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: 0 20rem auto;
  grid-template-rows: 100%;
  height: 100vh;

  .pointer {
    grid-column: 1;
    grid-row: 1;

    z-index: 1;

    width: 100vw;
    height: 100vh;
    pointer-events: none;

    .line, .subline {
      stroke:#ffffff99;
      stroke-width:2;
    }

    .point, .joint {
      stroke:#ffffff99;
      fill: white;
    }
  }

  .list {
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {  display: none; } /* Chrome, Safari and Opera */

    scroll-snap-type: y mandatory;

    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 4;

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
      display: flex;
      flex-direction: column;
      pointer-events: all;

      border: 1px solid rgba(255, 255, 255, 0.123);
      border-radius: .5rem;
      padding: .7rem;
      max-width: 80%;

      h1 {
        padding: 0 .5rem .3rem .5rem;
        margin: 0;
      }

      span {
        padding: .3rem .5rem 0 .5rem;
        margin: 0;
      }
    }
    
  }
}
</style>