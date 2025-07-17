AOS.init();
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");
let openBtn = false;

function toggleIcon() {
  openBtn = !openBtn;
  icon.classList = openBtn ? "bi bi-list-nested" : "bi bi-list";
}

btn.addEventListener('click', toggleIcon);

const vm = Vue.createApp({
  data() {
    return {
      hover: false,
      hoverIndex: null,
      menu: 0,
      menuItems: ["Sobre mí", "Idiomas", "Tecnologías", "Proyectos"],
      my: "./assets/img/My-img8bit-com-Effect.gif"
    }
  },

  methods: {

    sobreMi() {
      this.menu = 1
    },

    idiomas() {
      this.menu = 2
    },

    tecnologias() {
      this.menu = 3
    },

    proyectos() {
      this.menu = 4
    },

    volver() {
      this.menu = 0
    },

    mouseOver(index) {
      this.hover = true;
      this.hoverIndex = index;
      document.getElementById("correct-sound").play();
    },
    mouseOut() {
      this.hover = false;
      this.hoverIndex = null;
    },

    mouseClick() {
      document.getElementById("click-sound-menu").play();
    },

    selectMenu(index) {
      this.menu = index + 1;
    }
  },

  template: `
    <audio id="correct-sound" src="./assets/sound/v2.mp3"></audio>
    <audio id="click-sound" src="./assets/sound/v2.mp3"></audio>
    <audio id="click-sound-menu" src="./assets/sound/gta-menu.wav"></audio>

    <div v-if="menu === 0">
      <div class="container_master_tablet">
        <ul>
          <li v-for="(item, index) in menuItems" :key="index" 
              @mouseover="mouseOver(index)" 
              @mouseout="mouseOut" 
              @click="selectMenu(index)">
            
            <a href="#" @click="mouseClick">{{ item }}</a>
            <img v-if="hover && hoverIndex === index" src="./assets/img/def_def.png" alt="Imagen" class="imagen-hover">
          </li>
        </ul>
      </div>
    </div>

<div class="about-mi" v-if="menu === 1">
<div class="sobre_mi_container">
<div>
    <img src="./assets/img/My-img8bit-com-Effect.gif" alt="">
    <h1>Sobre Mí</h1>
</div>

<div class="text">
<p>Ya ha pasado más de un año desde que descubrí mi pasión por el desarrollo web. Desde entonces, cada día representa una nueva oportunidad para aprender, crecer profesionalmente y avanzar en mi desarrollo personal y económico.
Te invito a explorar mi portafolio; espero que lo disfrutes tanto como yo disfruto construirlo.
</div>
</div>
<a class="volver" @click="volver">Volver</a>
</div>

<div v-if="menu === 2">

<div class="container_idiomas" >
      <h1 data-aos="fade-right">Idiomas</h1>

      <div class="idiomas_items">
        <div class="ingles item" data-aos="fade-left">
          <img src="./assets/img/en.png" alt="img_ingles">
          <h3>Ingles</h3>
          <p>B1</p>
        </div>

        <div class="chino item" data-aos="fade-up-right">
          <img src="./assets/img/ch.png" alt="img_chino">
          <h3>Chino</h3>
          <p>HSK2</p>
        </div>
      </div>
    </div>
    <a class="volver" @click="volver">Volver</a>

</div>

<div v-if="menu === 3">

<div class="container_tech">
        <h1>Tecnologias</h1>

        <div class="tecnologias">
            <img src="./assets/img/icons8-html-96.png" alt="">
            <img src="./assets/img/icons8-css-96.png" alt="">
            <img src=" ./assets/img/icons8-js-96.png" alt="">
            <img src=" ./assets/img/documento-php.png" alt="">
            <img src=" ./assets/img/servidor-sql.png" alt="">
            <img src="./assets/img/Vue.js.png" alt="">
            <img src="./assets/img/express-white.png" alt="">
            <img src="./assets/img/Node.js.png" alt="">
            <img src="./assets/img/NPM.png" alt="">
            <img src="./assets/img/Python.png" alt="">
            <i class="bi bi-bootstrap-fill"></i>
            <i class="bi bi-git"></i>
            <i class="bi bi-github"></i>
        </div>
    </div>

<a class="volver" @click="volver">Volver</a>
</div>

<div v-if="menu === 4">

<div class="tech-container">
        <div class="card" style="width: 15rem;">
            <a href="https://jacksonpirlo.github.io/GreenGables/"><img src="./assets/img/greengables.jpeg" class="card-img-top" alt="..."></a> 
            <div class="card-body">
                <h1>Grenn Gables</h1>
              <p class="card-text">Pagina web para grupo de investigacion contra el consumo de sustancias psicoactivas</p>
            </div>
          </div>

          <div class="card" style="width: 15rem;">
              <a href="https://jacksonpirlo.github.io/Caja-fuerte/"><img src="./assets/img/caja_fuerte.jpeg" class="card-img-top" alt="..."></a>
            <div class="card-body">
                <h1>Caja Fuerte</h1>
              <p class="card-text">Caja fuerte hecha para practicar Vue JS</p>
            </div>
          </div>

          <div class="card" style="width: 15rem;">
            <a href="https://github.com/Jacksonpirlo/Registro-php-sql"><img src="./assets/img/login.jpeg" class="card-img-top" alt="..."></a>
            <div class="card-body">
                <h1>Registro</h1>
              <p class="card-text">Login hecho con PHP y SQL</p>
            </div>
          </div>

          <div class="card" style="width: 15rem;">
            <a href="https://jacksonpirlo.github.io/Random-Dogs/"><img src="./assets/img/random-dogs.jpeg" class="card-img-top" alt="..."></a>
            <div class="card-body">
                <h1>Pagina web de perritos aleatorios</h1>
              <p class="card-text"></p>
            </div>
          </div>


    </div>

<a class="volver" @click="volver">Volver</a>
</div>
  `
}).mount("#app")

// <!-- Audios -->
// <audio id="correct-sound" src="./assets/sound/v2.mp3"></audio>
// <audio id="click-sound" src="./assets/sound/v2.mp3"></audio>
// <audio id="click-sound-menu" src="./assets/sound/gta-menu.wav"></audio>

// <main>

//   <!-- Menú principal -->
//   <nav v-if="menu === 0" aria-label="Navegación principal">
//     <h1 class="title_desktop">Portafolio</h1>
//     <ul class="container_master_tablet">
//       <li v-for="(item, index) in menuItems" :key="index"
//           @mouseover="mouseOver(index)" 
//           @mouseout="mouseOut" 
//           @click="selectMenu(index)">
//         <a href="#" @click="mouseClick">{{ item }}</a>
//         <img v-if="hover && hoverIndex === index" src="./assets/img/def_def.png" alt="Imagen de ítem" class="imagen-hover">
//       </li>
//     </ul>
//   </nav>

//   <!-- Sección Sobre mí -->
//   <section class="about-mi" v-if="menu === 1" aria-labelledby="sobre-mi">
//     <div class="sobre_mi_container">
//       <header>
//         <img src="./assets/img/My-img8bit-com-Effect.gif" alt="Imagen personal estilo 8 bit">
//         <h1 id="sobre-mi">Sobre Mí</h1>
//       </header>
//       <div class="text">
//         <p>
//           Ya ha pasado más de un año desde que descubrí mi pasión por el desarrollo web. Desde entonces, cada día representa una nueva oportunidad para aprender, crecer profesionalmente y avanzar en mi desarrollo personal y económico.
//         </p>
//         <p>
//           Te invito a explorar mi portafolio; espero que lo disfrutes tanto como yo disfruto construirlo.
//         </p>
//       </div>
//       <button class="volver" @click="volver">Volver</button>
//     </div>
//   </section>

//   <!-- Sección Idiomas -->
//   <section v-if="menu === 2" class="container_idiomas" aria-labelledby="idiomas">
//     <h1 id="idiomas" data-aos="fade-right">Idiomas</h1>
//     <div class="idiomas_items">
//       <article class="ingles item" data-aos="fade-left">
//         <img src="./assets/img/en.png" alt="Bandera de inglés">
//         <h3>Inglés</h3>
//         <p>A2</p>
//       </article>
//       <article class="chino item" data-aos="fade-up-right">
//         <img src="./assets/img/ch.png" alt="Bandera de China">
//         <h3>Chino</h3>
//         <p>HSK2</p>
//       </article>
//     </div>
//     <button class="volver" @click="volver">Volver</button>
//   </section>

//   <!-- Sección Tecnologías -->
//   <section v-if="menu === 3" class="container_tech" aria-labelledby="tecnologias">
//     <h1 id="tecnologias">Tecnologías</h1>
//     <div class="tecnologias">
//       <img src="./assets/img/icons8-html-96.png" alt="HTML">
//       <img src="./assets/img/icons8-css-96.png" alt="CSS">
//       <img src="./assets/img/icons8-js-96.png" alt="JavaScript">
//       <img src="./assets/img/documento-php.png" alt="PHP">
//       <img src="./assets/img/servidor-sql.png" alt="SQL">
//       <img src="./assets/img/Vue.js.png" alt="Vue.js">
//       <img src="./assets/img/express-white.png" alt="Express.js">
//       <img src="./assets/img/Node.js.png" alt="Node.js">
//       <img src="./assets/img/NPM.png" alt="NPM">
//       <img src="./assets/img/Python.png" alt="Python">
//       <i class="bi bi-bootstrap-fill" aria-label="Bootstrap"></i>
//       <i class="bi bi-git" aria-label="Git"></i>
//       <i class="bi bi-github" aria-label="GitHub"></i>
//     </div>
//     <button class="volver" @click="volver">Volver</button>
//   </section>

//   <!-- Sección Proyectos -->
//   <section v-if="menu === 4" class="tech-container" aria-labelledby="proyectos">
//     <h1 id="proyectos" class="visually-hidden">Proyectos</h1>

//     <article class="card" style="width: 15rem;">
//       <a href="https://jacksonpirlo.github.io/GreenGables/">
//         <img src="./assets/img/greengables.jpeg" class="card-img-top" alt="Proyecto Green Gables">
//       </a>
//       <div class="card-body">
//         <h2>Green Gables</h2>
//         <p class="card-text">Página web para grupo de investigación contra el consumo de sustancias psicoactivas</p>
//       </div>
//     </article>

//     <article class="card" style="width: 15rem;">
//       <a href="https://jacksonpirlo.github.io/Caja-fuerte/">
//         <img src="./assets/img/caja_fuerte.jpeg" class="card-img-top" alt="Proyecto Caja Fuerte">
//       </a>
//       <div class="card-body">
//         <h2>Caja Fuerte</h2>
//         <p class="card-text">Aplicación de práctica con Vue JS</p>
//       </div>
//     </article>

//     <article class="card" style="width: 15rem;">
//       <a href="https://github.com/Jacksonpirlo/Registro-php-sql">
//         <img src="./assets/img/login.jpeg" class="card-img-top" alt="Proyecto Registro">
//       </a>
//       <div class="card-body">
//         <h2>Registro</h2>
//         <p class="card-text">Login hecho con PHP y SQL</p>
//       </div>
//     </article>

//     <article class="card" style="width: 15rem;">
//       <a href="https://jacksonpirlo.github.io/Random-Dogs/">
//         <img src="./assets/img/random-dogs.jpeg" class="card-img-top" alt="Proyecto Random Dogs">
//       </a>
//       <div class="card-body">
//         <h2>Página de perritos aleatorios</h2>
//       </div>
//     </article>

//     <button class="volver" @click="volver">Volver</button>
//   </section>

// </main>

