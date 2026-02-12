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

  const textContainer = document.createElement('div');
  rows.forEach((row) => {
    const picture = row.querySelector('picture, img');
    const heading = `<h2>${row.children[0].textContent}</h2>`;

    const description=row.children[1];
    textContainer.append(heading, description);
    console.log(textContainer);
    if (!picture) return;

    const slide = document.createElement('li');
    slide.className = 'splide__slide singleslider__slide';

    slide.append(picture.cloneNode(true),textContainer.cloneNode(true));
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