customElements.define('article-card', 
 class extends HTMLElement {
  constructor() {
  super();
  const template = document.getElementById('article-card-template').content;
  const shadowRoot = this.attachShadow({mode: 'open'});

  //  Get the URL to the image from the attribute on the custom element
  let imgUrl;
  if(this.hasAttribute('img')) {
    imgUrl = this.getAttribute('img');
  } else {
    imgUrl = '../images/placeholder-green.png';
  }
  // creating a style element to add to the shadow dom to add the image as a background image
  const style = document.createElement('style');
  const bkgdImg = ".article-title{background-image:url(" + imgUrl + ");background-size:300px;}";
  style.textContent = bkgdImg;

  // Attached the created elements to the shadow dom
  shadowRoot.appendChild(template.cloneNode(true));
  shadowRoot.appendChild(style);

   
  }
});