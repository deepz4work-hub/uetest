export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'two-column-wrapper';

  const col1 = document.createElement('div');
  col1.className = 'column column-1';

  const col2 = document.createElement('div');
  col2.className = 'column column-2';

  /*
    Model order:
    0 → h2 (column 1)
    1 → richtext (column 1)
    2 → richtext (column 2)
    3 → linkTitle (column 2)
  */

  if (rows[0]) col1.append(rows[0]);
  if (rows[1]) col1.append(rows[1]);

  if (rows[2]) col2.append(rows[2]);

  // Link handling
  if (rows[3]) {
    const linkText = rows[3].textContent.trim();
    if (linkText) {
      const link = document.createElement('a');
      link.href = '#'; // update if you add link URL later
      link.textContent = linkText;
      link.className = 'column-link';
      col2.append(link);
    }
  }

  wrapper.append(col1, col2);
  block.append(wrapper);
}
