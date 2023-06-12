customElements.define('tag-card-g3', class extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Estilos CSS
    const style = document.createElement('style');
    style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Sacramento&display=swap');

        p, h1 {
          margin: 0; padding: 0;
        }
        
         body, .text-light-black {
           color: #2c0000;
        }
        .text-black {
          color: #2c0000;
        }
        .text-muted {
          color: #2c0000;
        }
        
        .text-uppercase {
          text-transform: uppercase;
        }
        
        .font-weight-normal {
          font-weight: 600;
        }
        .font-weight-medium {
          font-weight: 500;
        }
        
        .lts-1px {
          letter-spacing: 1px;
        }
        .lts-2px {
          letter-spacing: 2px;
        }
        
        .w-full {
          width: 100%;
        }
        
        .text-center {
          text-align: center;
        }
        .text-left {
          text-align: left;
        }
        .text-right {
          text-align: right;
        }
        
        .d-block {
          display: block;
        }
        .d-inline-block {
          display: inline-block;
        }
        
        .p-relative {
          position: relative;
        }
        .p-absolute {
          position: absolute
        }
        
        .bg-coffee {
          background-color: #fff4e6;
        }
        
        .bg-white {
          background-color: #2c0000;
        }
        
        .small {
          font-size: 0.75rem;
        }
        .card-heading {
          font-size: 2.25rem;
        }
        .styled-link {
          text-decoration: none;
          outline: none;
          color: #c27e17;
          transition: all 0.25s ease-in; 
        }
        .styled-link:hover,
        .styled-link:focus,
        .styled-link:active {
          color: brown;
        }
        .shadow-1 {
          box-shadow: 0 2px 5px 0 #2c0000;
        }
        .blue-hover {
          transition: all 0.25s ease-in;
          border-bottom: 5px solid transparent;
        }
        .blue-hover:hover {
          transform: translateY(-5px);
          border: none;
          border-bottom: 5px solid #c27e17;
        }
        
        .clearfix::before,
        .clearfix::after {
          content: "";
          display: table;
          clear: both;
        }
        .float-left {
          float: left;
        }
        .float-right{
          float: right;
        }
        
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .ml-auto {
          margin-left: auto;
        }
        .mr-auto {
          margin-right: auto;
        }
        .mx-0 {
          margin-left: 0;
          margin-right: 0;
        }
        .mx-1 {
          margin-left: 1rem;
          margin-right: 1rem;
        }
        .mx-2 {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
        .mx-3 {
          margin-left: 0.25rem;
          margin-right: 0.25rem;
        }
        
        .my-0 {
          margin-top: 0;
          margin-bottom: 0;
        }
        .my-1 {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .my-2 {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .my-3 {
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
        }
        
        .mt-0 {
          margin-top: 0;
        }
        .mt-1 {
          margin-top: 1rem;
        }
        .mt-2 {
          margin-top: 0.5rem;
        }
        .mt-3 {
          margin-top: 0.25rem;
        }
        
        .mb-0 {
          margin-bottom: 0;
        }
        .mb-1 {
          margin-bottom: 1rem;
        }
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        .mb-3 {
          margin-bottom: 0.25rem;
        }
        
        .ml-0 {
          margin-left: 0;
        }
        .ml-1 {
          margin-left: 1rem;
        }
        .ml-2 {
          margin-left: 0.5rem;
        }
        .ml-3 {
          margin-left: 0.25rem;
        }
        
        .px-0 {
          padding-left: 0;
          padding-right: 0;
        }
        .px-1 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .px-2 {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
        .px-3 {
          padding-left: 0.25rem;
          padding-right: 0.25rem;
        }
        
        .py-0 {
          padding-top: 0;
          padding-bottom: 0;
        }
        .py-1 {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .py-2 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        .py-3 {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }
        
        .pt-0 {
          padding-top: 0;
        }
        .pt-1 {
          padding-top: 1rem;
        }
        .pt-2 {
          padding-top: 0.5rem;
        }
        .pt-3 {
          padding-top: 0.25rem;
        }
        
        .pb-0 {
          padding-bottom: 0;
        }
        .pb-1 {
          padding-bottom: 1rem;
        }
        .pb-2 {
          padding-bottom: 0.5rem;
        }
        .pb-3 {
          padding-bottom: 0.25rem;
        }
        
        .card-container {
          display: flex;
          justify-content: center; /* Centra horizontalmente */
          align-items: flex-start;
          margin-top: 2rem;
        }
        
        .card {
          width: 360px;
          overflow: hidden;
          border-radius: 1px;
          margin: 0 0.5rem; /* Espacio entre las tarjetas */
        }
      `;
    shadowRoot.appendChild(style);

    // Contenido del Web Component
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="card-container">
      <div class="card my-2 p-relative bg-coffee shadow-1 blue-hover">
        <img src="https://cdn.pixabay.com/photo/2016/11/29/12/45/beverage-1869598_1280.jpg" alt="Man with backpack" class="d-block w-full">
        <div class="px-2 py-2">
          <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
            Coffee
          </p>
          <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style="line-height: 1.25;">
            Discover Our Specialty Coffees
          </h1>
          <p class="mb-1">
            Indulge in the rich flavors and unique profiles of our specialty coffees. From single-origin beans to carefully crafted blends, we have something to satisfy every coffee lover's palate.
          </p>
        </div>
        <a href="#0" class="text-uppercase d-inline-block font-weight-medium lts-2px mx-2 mb-2 text-center styled-link">
          Read More
        </a>
      </div>

      <div class="card my-2 p-relative bg-coffee shadow-1 blue-hover">
        <img src="https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_1280.jpg" alt="Cup of coffee" class="d-block w-full">
        <div class="px-2 py-2">
          <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
            Pastries
          </p>
          <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style="line-height: 1.25;">
            Taste Our Delicious Pastries
          </h1>
          <p class="mb-1">
            Treat yourself to our mouthwatering pastries made with love and the finest ingredients. From flaky croissants to decadent cakes, our pastries are the perfect companion to a cup of coffee.
          </p>
        </div>
        <a href="#0" class="text-uppercase d-inline-block font-weight-medium lts-2px mx-2 mb-2 text-center styled-link">
          Read More
        </a>
      </div>

      <div class="card my-2 p-relative bg-coffee shadow-1 blue-hover">
      <img src="https://cdn.pixabay.com/photo/2017/06/02/11/49/still-life-2366084_1280.jpg" alt="Cup of coffee" class="d-block w-full">
      <div class="px-2 py-2">
        <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
          Tea
        </p>
        <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style="line-height: 1.25;">
          Coffee Alternatives for Tea Lovers
        </h1>
        <p class="mb-1">
          Treat yourself to our mouthwatering pastries made with love and the finest ingredients. From flaky croissants to decadent cakes, our pastries are the perfect companion to a cup of coffee.
        </p>
      </div>
      <a href="#0" class="text-uppercase d-inline-block font-weight-medium lts-2px mx-2 mb-2 text-center styled-link">
        Read More
      </a>
    </div>

    </div>
      `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
});