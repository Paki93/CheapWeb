class SiteFooter extends HTMLElement {
    connectedCallback() {
      fetch("components/footer.html")
        .then(res => res.text())
        .then(html => this.innerHTML = html);
    }
  }
  customElements.define("site-footer", SiteFooter);
  