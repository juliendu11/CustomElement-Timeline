class Timeline extends HTMLElement {
     /**
   * Fire the attributeChangedCallback when the article
   * attribute has been changed.
   */
  static get observedAttributes() {
    return ["data"];
  }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.root.innerHTML = `<div class="timeline">${this.buildStyles()}</div>`;
  }

  disconnectedCallback() {
    this.root.innerHTML = "";
  }

  set data(val) {
    this.setAttribute("data", JSON.stringify(val));
  }

  get data() {
    return JSON.parse(this.getAttribute("data"));
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "data") {
      const values = JSON.parse(newVal);
      const main = this.root.querySelector(".timeline");

      let right =false
      values.forEach(value=>{
    //    const divContainer = document.createElement('div');
    //    divContainer.classList.add('container')
    //    divContainer.classList.add(right ? 'right': 'left')

    //    const divContent =document.createElement('div');
    //    divContent.classList.add('content')

    //    const h2 = document.createElement('h2');
    //    h2.innerHTML = value.date;
    //    divContent.appendChild(h2);

    //    const p = document.createElement('p');
    //    p.innerHTML = value.text;
    //    divContent.appendChild(p);

    //    divContainer.appendChild(divContent)

    //    main.appendChild(divContainer)
    //    right = !right
      })
    }
  }

  buildStyles() {
    return `<style>
  `;
  }
}

customElements.define("timeline-element", Timeline);
