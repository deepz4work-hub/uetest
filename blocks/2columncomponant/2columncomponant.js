export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  /*
    Model order:
    0 → title
    1 → titleType
    2 → text_column_1
    3 → text_column_2
    4 → linkTitle
  */

  const wrapper = document.createElement('div');
  wrapper.className = 'two-column-wrapper';

  const col1 = document.createElement('div');
  col1.className = 'column column-1';

  const col2 = document.createElement('div');
  col2.className = 'column column-2';

  /* -------------------------
     Title with dynamic tag
  -------------------------- */
  const titleText = rows[0]?.textContent?.trim();
  let current=rows[0]
  while (current && current.children.length) {
    current = current.children[0];
  }
  const titleType = current.tagName.toLowerCase()


  if (titleText) {
    const heading = document.createElement(titleType);
    heading.textContent = titleText;
    col1.append(heading);
  }

   /* -------------------------
     Column 1 text
  -------------------------- */
  if (rows[1]) {
    col1.append(rows[1]);
  }

  /* -------------------------
     Column 2 text
  -------------------------- */
  if (rows[2]) {
    col2.append(rows[2]);
  }

  /* -------------------------
     Column 2 text
  -------------------------- */
  if (rows[3]) {
    col2.append(rows[3]);
  }

  /* -------------------------
     Column 2 link
  -------------------------- */
  const linkText = rows[4]?.textContent?.trim();
  if (linkText) {
    const link = document.createElement('a');
    link.textContent = linkText;
    link.href = '#'; // extend later for URL support
    link.className = 'column-link';
    col2.append(link);
  }

  wrapper.append(col1, col2);
  block.append(wrapper);
}
