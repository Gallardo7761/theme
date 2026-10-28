const HEARTS = ['❤️', '💛', '🧡', '💚', '💙', '💜'];

const LINKS = [
  ['MiarmaGit', 'https://git.miarma.net/Gallardo7761', 'noopener noreferrer'],
  ['Instagram', 'https://instagram.com/gallardoo7761', 'noopener noreferrer'],
  ['Mastodon', 'https://masto.es/@gallardo7761', 'me noopener noreferrer'],
];

class MiarmaFooter extends HTMLElement {
  connectedCallback() {
    if (!this.childElementCount) this.render();
    const heart = this.querySelector('.miarma-footer__heart');
    this.timer = setInterval(() => {
      heart.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    }, 1000);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }

  render() {
    const footer = document.createElement('footer');
    footer.className = 'miarma-footer';
    footer.innerHTML = `
      <span>Dev'd with <span class="miarma-footer__heart">💜</span> by <a href="https://jose.miarma.net">Gallardo7761</a></span>
      <nav class="miarma-footer__links">
        ${LINKS.map(([name, href, rel]) => `<a href="${href}" target="_blank" rel="${rel}">${name}</a>`).join('')}
      </nav>`;
    this.append(footer);
  }
}

if (!customElements.get('miarma-footer')) customElements.define('miarma-footer', MiarmaFooter);
