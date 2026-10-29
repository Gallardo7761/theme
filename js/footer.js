const HEARTS = ['❤️', '💛', '🧡', '💚', '💙', '💜'];

const LINKS = [
  ['Fragua', 'https://git.killobyte.es/Gallardo7761', 'noopener noreferrer'],
  ['Instagram', 'https://instagram.com/gallardoo7761', 'noopener noreferrer'],
  ['Mastodon', 'https://masto.es/@gallardo7761', 'me noopener noreferrer'],
];

class KBFooter extends HTMLElement {
  connectedCallback() {
    if (!this.childElementCount) this.render();
    const heart = this.querySelector('.kb-footer__heart');
    this.timer = setInterval(() => {
      heart.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    }, 1000);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }

  render() {
    const footer = document.createElement('footer');
    footer.className = 'kb-footer';
    footer.innerHTML = `
      <span>Dev'd with <span class="kb-footer__heart">💜</span> by <a href="https://jose.killobyte.es">Gallardo7761</a></span>
      <nav class="kb-footer__links">
        ${LINKS.map(([name, href, rel]) => `<a href="${href}" target="_blank" rel="${rel}">${name}</a>`).join('')}
      </nav>`;
    this.append(footer);
  }
}

if (!customElements.get('kb-footer')) customElements.define('kb-footer', KBFooter);
