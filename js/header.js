const LOGO = new URL('img/marca-clara.svg', import.meta.url).href;

class KBHeader extends HTMLElement {
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
    this.brand.className = 'kb-header__brand';
    this.brand.innerHTML = `
      <img src="${LOGO}" alt="" width="40" height="40">
      <span>
        <span class="kb-header__title"></span>
        <span class="kb-header__tag"></span>
      </span>`;
  }

  update() {
    const site = this.getAttribute('site');
    const host = site ? `${site}.killobyte.es` : 'killobyte.es';
    this.brand.href = this.getAttribute('href') ?? '/';
    this.brand.querySelector('.kb-header__title').innerHTML =
      host.split('.').join('<span class="kb-header__dot">.</span>');
    this.brand.querySelector('.kb-header__tag').textContent = this.getAttribute('tag') ?? '';
  }
}

if (!customElements.get('kb-header')) customElements.define('kb-header', KBHeader);
