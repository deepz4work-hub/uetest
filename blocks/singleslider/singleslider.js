
export default async function decorate(block) {

  const module = await import('../../scripts/splide/splide.js');
  const Splide = module.default;

  console.log(Splide)
  const rows = [...block.children];
  block.textContent = '';

  if (!rows.length) return;

  const picture = rows.find(r => r.querySelector('picture'))?.querySelector('picture');
  if (!picture) return;

  const splideEl = document.createElement('div');
  splideEl.className = 'splide';

  const track = document.createElement('div');
  track.className = 'splide__track';

  const list = document.createElement('ul');
  list.className = 'splide__list';

  for (let i = 0; i < 3; i += 1) {
    const slide = document.createElement('li');
    slide.className = 'splide__slide';
    slide.append(picture.cloneNode(true));
    list.append(slide);
  }

  track.append(list);
  splideEl.append(track);
  block.append(splideEl);

  new Splide(splideEl, {
    type: 'loop',
    perPage: 1,
  }).mount();
}
