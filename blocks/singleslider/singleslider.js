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
  wrapper.className = 'slider-wrapper';
   const textWrapper = document.createElement('div');
    textWrapper.className = 'text-wrapper';


    if(rows.length>0)
    {
        if(rows[0])
            textWrapper.append(rows[0]);
        if(rows[1])
            textWrapper.append(rows[1]);
        if(rows[2])
            wrapper.append(rows[2]);
        wrapper.append(textWrapper);

    }

  block.append(wrapper);
}
