export default async function decorate(block) {
  const module = await import('../../scripts/splide/splide.js');
  const Splide = module.default;

  const rows = [...block.children];
  block.textContent = '';
  if (!rows.length) return;

  const splideEl = document.createElement('div');
  splideEl.className = 'splide singleslider';

  const track = document.createElement('div');
  track.className = 'splide__track';

  const list = document.createElement('ul');
  list.className = 'splide__list';

  rows.forEach((row) => {
    const picture = row.querySelector('picture, img');
    console.log(picture);
    if (!picture) return;

    const slide = document.createElement('li');
    slide.className = 'splide__slide singleslider__slide';

    slide.append(picture.cloneNode(true));
    list.append(slide);
  });

  if (!list.children.length) return;

  track.append(list);
  splideEl.append(track);
  block.append(splideEl);

  new Splide(splideEl, {
    type: 'loop',
    perPage: 1,
  }).mount();
}