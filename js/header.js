class MiarmaHeader extends HTMLElement {
  static observedAttributes = ['site', 'tag', 'href'];

  connectedCallback() {
    this.setAttribute('role', 'banner');
    if (!this.brand) this.render();
    if (this.firstChild !== this.brand) this.prepend(this.brand);
    this.update();
  }

  attributeChangedCallback() {
    if (this.brand) this.update();
  }

  render() {
    this.brand = document.createElement('a');
    this.brand.className = 'miarma-header__brand';
    this.brand.innerHTML = `
      <img src="https://cdn.miarma.net/files/img/logo-without-text.svg" alt="" width="40" height="40">
      <span>
        <span class="miarma-header__title"></span>
        <span class="miarma-header__tag"></span>
      </span>`;
  }

  update() {
    const site = this.getAttribute('site');
    const host = site ? `${site}.miarma.net` : 'miarma.net';
    this.brand.href = this.getAttribute('href') ?? '/';
    this.brand.querySelector('.miarma-header__title').innerHTML =
      host.split('.').join('<span class="miarma-header__dot">.</span>');
    this.brand.querySelector('.miarma-header__tag').textContent = this.getAttribute('tag') ?? '';
  }
}

if (!customElements.get('miarma-header')) customElements.define('miarma-header', MiarmaHeader);
