
AOS.init();

const btn = document.getElementById("btn");
const icon = document.getElementById("icon");
let openBtn = false;

function toggleIcon() {
  openBtn = !openBtn;
  icon.classList = openBtn ? "bi bi-list-nested" : "bi bi-list";
}

btn.addEventListener('click', toggleIcon);

// const hover_h = document.querySelector(".li");


// hover_h.addEventListener("mouseover", () => {
// console.log("ssssssssssrfrf")
//     // También puedes agregar el icono al elemento aquí
//   });

//   hover_h.addEventListener("mouseout", () => {
//     console.log("ssss")
//     También puedes eliminar el icono del elemento aquí

//   });

const vm = Vue.createApp({
  data() {
    return {
      hover: false,
      hoverIndex: null,
      menu: 0
    }
  },

  methods: {
    mouseOver(index) {
      this.hover = true
      this.hoverIndex = index
      document.getElementById("correct-sound").play()
    },
    mouseOut() {
      this.hover = false
      this.hoverIndex = null
    },

    getHref(item) {
      switch (item) {
        case 'Sobre mí':
          return './assets/html/sobre_mi.html';
        case 'Idiomas':
          return './assets/html/idiomas.html';
        case 'Tecnologias':
          return './assets/html/tecnologias.html';
        case 'Proyectos':
          return './assets/html/proyectos.html';
        default:
          return './assets/html/tecnologias.html';
      }
    }
  },


  template:`

  <audio id="correct-sound" src="./assets/sound/v2.mp3" />
<div v-if="menu === 0">
<h1 class="title_desktop">Portafolio</h1>
<div class="container_master_tablet">
  <ul>
    <li class="li" v-for="(item, index) in ['Sobre mí', 'Idiomas', 'Tecnologias', 'Proyectos']" 
        @mouseover="mouseOver(index)" @mouseout="mouseOut">
        <a :href="getHref(item)">{{ item }}</a>
      <img v-show="hoverIndex === index" src="./assets/img/def_def.png" alt="Imagen" class="imagen-hover">
    </li>
  </ul>
<div>
</div>
</div>

  `
}).mount("#app")
