export type code_snippet = { lang: string, src: string, filename: string, file_url: string, project?: string, project_url?: string }

export const code_snippets: code_snippet[] = [{
  lang: 'typescript',
  filename: 'projects.vue',
  project: 'Portfolio',
  project_url: 'https://github.com/tomm2000/Portfolio',
  file_url: 'https://github.com/tomm2000/Portfolio/blob/master/pages/projects.vue',
  src: 
`updatePositions() {
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

    const dist = Math.abs(point.y - this.subline_start.y)

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
}`
},{
  lang: 'glsl',
  filename: 'BasicNoise.ts',
  file_url: 'https://github.com/tomm2000/StarForge-Prototypes/blob/master/mechanics/terrain_generation/test12/Planet/noise_layer/BasicNoise.ts',
  project: 'StarForge',
  project_url: 'https://github.com/tomm2000/StarForge-Prototypes',
  src:
`void main() {
  vec4 position = texture2D(position_texture, vTextureCoord);
  vec4 prev_elevation = texture2D(elevation_texture, vTextureCoord);

  float total_elevation = 0.0;
  float oct_amplitude = amplitude;
  float oct_frequency = frequency;

  vec3 p = vec3(0.0);
  vec3 g;
  float alpha = 1.0 * float(seed);

  for(int i = 0; i < MAX_OCTAVES; i++) {
    if(i >= octaves) { break; }

    vec3 v = position.xyz * oct_frequency;

    total_elevation += psrdnoise(v, p, alpha, g) * oct_amplitude;

    oct_frequency *= lacunarity;
    oct_amplitude *= persistance;
  }

  vec3 pos = position.xyz;

  for(int i = 0; i < MAX_EXPONENT; i++) {
    if(i >= exponent - 1) { break; }

    total_elevation *= total_elevation;
  }

  if(mantain_sign == 1) { total_elevation *= sign(amplitude); }

  if(is_masked == 1) {
    vec4 mask_elevation = texture2D(mask_texture, vTextureCoord);
    total_elevation *= mask_elevation.b;
  }

  float output_elevation = prev_elevation.a;
  if(mask_only == 0) { output_elevation += total_elevation; }

  gl_FragColor = vec4(
    0.0, 0.0,
    total_elevation,
    output_elevation
  );
}`
}]