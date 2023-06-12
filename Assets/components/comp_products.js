customElements.define('product-card', class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Estilos CSS
        const style = document.createElement('style');
        style.textContent = document.getElementById('template-product-card').textContent;
        shadowRoot.appendChild(style);

        // Contenido del Web Component
        const template = document.createElement('template');
        template.innerHTML = document.getElementById('template-product-card').innerHTML;

        // Obtener atributos personalizados
        const src = this.getAttribute('src');
        const p_name_txt = this.getAttribute('p_name_txt');
        const price_txt = this.getAttribute('price_txt');

        // Actualizar valores de elementos
        const imgElement = template.content.querySelector('.card_img img');
        imgElement.src = src;

        const pNameElement = template.content.querySelector('.p_name_txt');
        pNameElement.textContent = p_name_txt;

        const priceElement = template.content.querySelector('.price_txt');
        priceElement.textContent = price_txt;

        // Insertar contenido adicional
        const content = this.innerHTML.trim();
        template.content.querySelector('.card_details').insertAdjacentHTML('beforeend', content);

        shadowRoot.appendChild(template.content.cloneNode(true));
    }
});