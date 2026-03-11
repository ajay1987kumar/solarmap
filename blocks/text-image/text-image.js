export default function decorate(block) {
    const rows = [...block.querySelectorAll('div')];
    rows.forEach((row) => {
      const cells = row.querySelectorAll('div');
      const wrapper = document.createElement('div');
      wrapper.className = 'text-image';
  
      const img = document.createElement('img');
      img.src = cells[0].textContent.trim();
      img.alt = 'Illustration';
  
      const text = document.createElement('p');
      text.textContent = cells[1].textContent.trim();
  
      wrapper.appendChild(img);
      wrapper.appendChild(text);
      row.replaceWith(wrapper);
    });
  }
  