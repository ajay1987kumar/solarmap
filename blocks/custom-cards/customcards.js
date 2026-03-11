export default function decorate(block) {
    const rows = [...block.querySelectorAll('div')];
    rows.forEach((row) => {
      const cells = row.querySelectorAll('div');
      const wrapper = document.createElement('div');
      wrapper.className = 'card';
  
      const img = document.createElement('img');
      img.src = cells[0].textContent.trim();
      img.alt = cells[1].textContent.trim();
  
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
  
      const title = document.createElement('h3');
      title.textContent = cells[1].textContent.trim();
  
      const hoverText = document.createElement('p');
      hoverText.textContent = cells[2].textContent.trim();
  
      overlay.appendChild(title);
      overlay.appendChild(hoverText);
  
      wrapper.appendChild(img);
      wrapper.appendChild(overlay);
      row.replaceWith(wrapper);
    });
  }
  