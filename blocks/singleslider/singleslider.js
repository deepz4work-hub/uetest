export default async function decorate(block) {
  // 1. Dynamically load Splide
  const module = await import('../../scripts/splide/splide.js');
  const Splide = module.default;

  // Take a snapshot of the original rows
  const rows = [...block.children];

  // Clear existing content to rebuild structure for Splide
  block.textContent = '';

  if (!rows.length) return;

  // 2. Create Splide DOM structure
  const splideEl = document.createElement('div');
  splideEl.className = 'splide singleslider';

  const track = document.createElement('div');
  track.className = 'splide__track';

  const list = document.createElement('ul');
  list.className = 'splide__list';

  // 3. Convert each authored row into a Splide slide
  rows.forEach((row) => {
    const slide = document.createElement('li');
    slide.className = 'splide__slide singleslider__slide';

    // We clone the row content so authoring structure is preserved
    const slideContent = document.createElement('div');
    slideContent.className = 'singleslider__content';

    // Try to identify the authored elements (title, content, image)
    // You can refine these selectors based on your actual HTML output.
    const titleEl = row.querySelector('h1, h2, h3, h4, h5, h6, strong, b, p');
    const contentEl = row.querySelector('p, div');
    const pictureEl = row.querySelector('picture, img, a');

    if (pictureEl) {
      const mediaWrapper = document.createElement('div');
      mediaWrapper.className = 'singleslider__image';
      mediaWrapper.append(pictureEl.cloneNode(true));
      slideContent.append(mediaWrapper);
    }

    if (titleEl) {
      const titleWrapper = document.createElement('div');
      titleWrapper.className = 'singleslider__title';
      titleWrapper.textContent = titleEl.textContent;
      slideContent.append(titleWrapper);
    }

    if (contentEl && contentEl !== titleEl) {
      const contentWrapper = document.createElement('div');
      contentWrapper.className = 'singleslider__body';
      contentWrapper.innerHTML = contentEl.innerHTML;
      slideContent.append(contentWrapper);
    }

    // Fallback: if we didn't detect anything, just clone the whole row
    if (!slideContent.children.length) {
      slideContent.append(...[...row.children].map((c) => c.cloneNode(true)));
    }

    slide.append(slideContent);
    list.append(slide);
  });

  // 4. Assemble Splide and append to block
  track.append(list);
  splideEl.append(track);
  block.append(splideEl);

  // 5. Initialize Splide
  new Splide(splideEl, {
    type: 'loop',
    perPage: 1,
    pagination: true,
    arrows: true,
  }).mount();
}