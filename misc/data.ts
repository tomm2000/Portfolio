//---------------------------------------------------------

//---------------------------------------------------------


//---- PROJECTS -------------------------------------------
type normal_project_data = { selected: boolean, link?: string, src: string, title: string, description: string, active?: boolean }
type empty_project_data  = { active: boolean}
export type projectType = normal_project_data | empty_project_data

export const PROJECT_LIST: projectType[] = [
{ active: false },
//-------------------------------------------
{ selected: false, link:'https://tomm2000.github.io/StarForge-Prototypes/', src: 'projects/starforge.png', title: 'StarForge', description: 
`A procedural solar system and planet generator.

Written in typescript using Babylon.js for the 3D and various noise algorithms for the terrain generation.

The generator is GPU-accelerated for better performance`},
//-------------------------------------------
{ selected: false, link:'https://github.com/tomm2000/neat_rust', src: 'projects/rustneat.png', title: 'Rust N.E.A.T.', description:
`A rust implementation of the NEAT (NeuroEvolution of Augmenting Topologies) algorithm.

Written in rust using macroQUAD for the interface.
`},
//-------------------------------------------
{ selected: false, src: 'projects/mailapp.png', title: 'Mail App', description:
`University project for 'programmazione 3'
`},
//-------------------------------------------
{ selected: false, src: 'projects/webapp.png', title: 'Prenotazioni WebApp', description:
`University project for 'tecnologie web'
`},
//-------------------------------------------
{ selected: false, src: 'projects/python_gallery.png', title: 'Python big-repo', link: 'https://github.com/tomm2000/python_bigrepo', description:
`A collection of multiple old python projects of mine
`},
//-------------------------------------------
{ active: false }
]
//---------------------------------------------------------


//---- NAVBAR ---------------------------------------------
type navbarType = {
  index: number,
  id: string,
  title: string,
  icon: string,
  page: string,
  color: string,
}

export const NAVBAR_LIST: navbarType[] = [{
  index: 0,
  id: 'home',
  title: 'Home',
  page: '/',
  color: '#1E75FF',
  icon: 
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#COLOR" style="#STYLE" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
  </svg>`
},{
  index: 1,
  id: 'projects',
  title: 'Projects',
  page: '/projects',
  color: '#3BCE94',
  icon: 
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#COLOR" style="#STYLE" class="bi bi-stack" viewBox="0 0 16 16">
    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
  </svg>`
},{
  index: 2,
  id: 'about',
  title: 'About',
  page: '/about',
  color: '#C64B4D',
  icon: 
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#COLOR" style="#STYLE" viewBox="0 0 16 16">
    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  </svg>`
},{
  index: 3,
  id: 'websites',
  title: 'Websites (WIP)',
  page: '/websites',
  color: '#F09148',
  icon: 
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#COLOR" style="#STYLE" class="bi bi-share-fill" viewBox="0 0 16 16">
    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
  </svg>`
},/*{
  index: 4,
  id: 'blog',
  title: 'Blog (WIP)',
  page: '/blog',
  color: '#F048DF',
  icon: 
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#COLOR" style="#STYLE" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"/>
    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
  </svg>`
},*/]
//---------------------------------------------------------