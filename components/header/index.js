class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    const headerComponent = document.createElement("template");
    const header = document.createElement("header");
    header.style.cssText = `display: flex;
            position: sticky;
            z-index: 999;
            top: 0;
            align-items: center;
            background-color: #fff;
            color: black;
            padding: 12px;
            text-align: left;
            box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
        `;
    const a = document.createElement("a");
    const img = document.createElement("img");
    img.style.cssText = `
        width: 30px; 
        height: auto;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
    `;
    if (window.location.pathname === "/" || window.location.pathname === "") {
      a.href = "/";
      img.src = "../../assets/icons/icon-home-64.png";
    } else {
      img.src = "../../assets/icons/icon-back-64.png";
      a.href = "/";
    }
    a.appendChild(img);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Gojek Screenshot";
    h2.style.cssText = `
        display: inline-block;
        vertical-align: middle;
        margin: 0;
    `;

    header.appendChild(a);
    header.appendChild(h2);
    shadowRoot.appendChild(header);
    shadowRoot.appendChild(headerComponent.content);
  }
}

customElements.define("header-component", Header);
