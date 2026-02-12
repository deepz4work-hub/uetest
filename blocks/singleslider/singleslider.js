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
    if (!picture) return;

    // ✅ Create per-slide container
    const textContainer = document.createElement('div');
    textContainer.className = 'singleslider__content';

    // Heading
    const heading = document.createElement('h2');
    heading.textContent = row.children[0]?.textContent || '';

    // Description
    const description = row.children[1]?.cloneNode(true);

    if (heading.textContent) textContainer.append(heading);
    if (description) textContainer.append(description);

    const slide = document.createElement('li');
    slide.className = 'splide__slide singleslider__slide';
    const slideWrap= document.createElement('div');
    slideWrap.className = 'singleslider__slide-wrap';
    slideWrap.append(picture.cloneNode(true), textContainer);

    slide.append(slideWrap);
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
