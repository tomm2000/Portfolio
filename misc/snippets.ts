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
},{
  lang: 'rust',
  filename: 'genome.rs',
  file_url: '',
  project_url: '',
  project: 'Rust NEAT',
  src: 
`/** calculates the distance between this genome g1 and a second genome g2 */
pub fn distance(&self, other: Self) -> f32 {
  let g1;
  let g2;

  if self.get_max_innov() > other.get_max_innov() {
    g1 = self.get_connections();
    g2 = other.get_connections();
  } else {
    g1 = other.get_connections();
    g2 = self.get_connections();
  }

  let mut index1 = 0;
  let mut index2 = 0;

  let mut similar = 0;
  let mut disjoint = 0;
  let mut weight_diff = 0.0;

  while index1 < g1.len() && index2 < g2.len() {
    let conn1 = g1.get(index1).unwrap();
    let conn2 = g2.get(index2).unwrap();

    if conn1.get_innov() == conn2.get_innov() { // genes are similar
      similar += 1;
      weight_diff += (conn1.get_weight() - conn2.get_weight()).abs();
      index1 += 1;
      index2 += 1;
    } else if conn1.get_innov() > conn2.get_innov() {
      disjoint += 1;
      index2 += 1;
    } else {
      disjoint += 1;
      index1 += 1;
    }
  }

  weight_diff /= max(1, similar) as f32;
  let excess = g1.len() - index1;

  let n = max(g1.len(), g2.len());

  return (C1 as f32 * disjoint as f32 + C2 as f32 * excess as f32 + C3 as f32 * weight_diff) / n as f32;
}`
}]