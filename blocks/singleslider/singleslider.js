export default function decorate(block) {
  const rows = [...block.children];
  block.textContent = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'slider-wrapper';

  const textWrapper = document.createElement('div');
  textWrapper.className = 'text-wrapper';

  if (!rows.length) return;

  const picture = rows[0].querySelector('picture');
  if (!picture) return;

  // Splide structure
  const splide = document.createElement('div');
  splide.className = 'splide';

  const track = document.createElement('div');
  track.className = 'splide__track';

  const list = document.createElement('ul');
  list.className = 'splide__list';

  // Create slides (example: 3 slides)
  for (let i = 0; i < 3; i += 1) {
    const slide = document.createElement('li');
    slide.className = 'splide__slide';

    slide.append(picture.cloneNode(true)); // ✅ full <picture>
    list.append(slide);
  }

  track.append(list);
  splide.append(track);
  textWrapper.append(splide);

  if (rows[2]) {
    wrapper.append(rows[2]);
  }

  wrapper.append(textWrapper);
  block.append(wrapper);
}
