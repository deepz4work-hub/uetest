export default async function decorate(block) {
  const rows = [...block.children];
  block.textContent = '';

  if (!rows.length) return;

  // ✅ Load Splide correctly
  if (!window.Splide) {
    await import('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js');
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'slider-wrapper';

  const textWrapper = document.createElement('div');
  textWrapper.className = 'text-wrapper';

  // ✅ Find picture safely (first available)
  const picture = block.querySelector('picture');
  if (!picture) {
    console.warn('No picture found for slider');
    return;
  }

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

  // Append text columns correctly
  if (rows[2]) wrapper.append(rows[2]);
  if (rows[3]) wrapper.append(rows[3]);

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
