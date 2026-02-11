import { splide } from '../../scripts/scripts.js'

export default async function decorate(block) {
  const rows = [...block.children];
  block.textContent = '';

  if (!rows.length) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'slider-wrapper';

  const textWrapper = document.createElement('div');
  textWrapper.className = 'text-wrapper';

  const picture = rows[3].querySelector('picture');
  if (!picture) return;

  // Splide structure
  const splide = document.createElement('div');
  splide.className = 'splide';

  const track = document.createElement('div');
  track.className = 'splide__track';

  const list = document.createElement('ul');
  list.className = 'splide__list';

  // Create slides
  for (let i = 0; i < 3; i += 1) {
    const slide = document.createElement('li');
    slide.className = 'splide__slide';
    slide.append(picture.cloneNode(true));
    list.append(slide);
  }

  track.append(list);
  splide.append(track);
  textWrapper.append(splide);

  if (rows[0]) {
    wrapper.append(rows[2]);
  }
 if (rows[1]) {
    wrapper.append(rows[2]);
  }
  wrapper.append(textWrapper);
  block.append(wrapper);

  // ✅ Mount Splide
  new window.Splide(splide, {
    type: 'loop',
    perPage: 1,
    arrows: true,
    pagination: true,
  }).mount();
}
