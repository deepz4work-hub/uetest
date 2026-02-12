export default function decorate(block) {
  const items = [...block.children];

  block.classList.add('singleslider');

  items.forEach((item, index) => {
    const [titleEl, contentEl] = item.children;

    if (!titleEl || !contentEl) return;

    // const button = document.createElement('button');
    // button.className = 'accordion-title';
    // button.type = 'button';
    // button.setAttribute('aria-expanded', 'false');
    // button.setAttribute('aria-controls', `accordion-panel-${index}`);
    // button.innerHTML = titleEl.innerHTML;

    // const panel = document.createElement('div');
    // panel.className = 'accordion-panel';
    // panel.id = `accordion-panel-${index}`;
    // panel.setAttribute('role', 'region');
    // panel.hidden = true;
    // panel.innerHTML = contentEl.innerHTML;

    // button.addEventListener('click', () => {
    //   const isOpen = button.getAttribute('aria-expanded') === 'true';

    //   // close all (single-open behavior)
    //   block.querySelectorAll('.accordion-title').forEach((btn) => {
    //     btn.setAttribute('aria-expanded', 'false');
    //   });
    //   block.querySelectorAll('.accordion-panel').forEach((p) => {
    //     p.hidden = true;
    //   });

    //   // open current if it was closed
    //   if (!isOpen) {
    //     button.setAttribute('aria-expanded', 'true');
    //     panel.hidden = false;
    //   }
    // });

    // item.innerHTML = '';
    // item.append(button, panel);
  });
}
