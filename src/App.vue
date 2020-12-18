<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <div class="container-menu">
          <div class="container-logo">
            <h1 class="site-title">Soluciones de Software G14</h1>
          </div>
          <nav class="nav-list">
            <ul class="main-menu">
              <li class="main-menu__item">
                <a href="#" class="main-menu__link">Inicio</a>
              </li>
              <li class="main-menu__item">
                <a href="#services" class="main-menu__link">Servicios</a>
              </li>
              <li class="main-menu__item">
                <a href="#news" class="main-menu__link">Noticias</a>
              </li>
              <li class="main-menu__item">
                <a href="#team" class="main-menu__link">Equipo</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="container-imagen"></div>
      </div>
      <div class="section-1" id="services">
        <p class="section-text"></p>
        <div class="col-3">
          <p>
            <img alt="servicio 1" src="../src/assets/images/servicio1.jpg" />
          </p>
          <div class="service-content">
            <h1>Desarrollo de Software</h1>
            <p class="service-text">
              Diseñamos estrategias de crecimiento que permitan trazar nuevas
              oportunidades para su negocio.
            </p>
          </div>
        </div>
        <div class="col-3">
          <p>
            <img alt="servicio 2" src="../src/assets/images/servicio2.jpg" />
          </p>
          <div class="service-content">
            <h1>Analisís de Datos</h1>
            <p class="service-text">
              Ayudamos al negocio a entender los insights que arrojan sus datos
              de cara a la mejora continua.
            </p>
          </div>
        </div>
        <div class="col-3">
          <p>
            <img alt="servicio 3" src="../src/assets/images/servicio3.jpg" />
          </p>
          <div class="service-content">
            <h1>Transformación Digital</h1>
            <p class="service-text">
              Impulsamos las últimas tecnologías para ayudar a las
              organizaciones a transformarse
            </p>
          </div>
        </div>
      </div>
      <div class="section-2" id="news" v-if="loaded">
        <p class="section-text"></p>
        <div class="section-news">
          <div class="news">
            <news-card :news="news[0]"></news-card>
            <news-card :news="news[1]"></news-card>
          </div>
          <div class="news">
            <news-card :news="news[2]"></news-card>
            <news-card :news="news[3]"></news-card>
          </div>
        </div>
      </div>

      <div class="section-3" id="team">
        <p class="section-text"></p>
        <team-card :member="members[0]"></team-card>
        <team-card :member="members[1]"></team-card>
        <team-card :member="members[2]"></team-card>
      </div>
      <footer class="footer">
        <p class="section-text">
          Todos los derechos reservados &#174;2020 - Grupo 14 MisionTIC
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import TeamCard from "./components/TeamCard.vue";
import NewsCard from "./components/NewsCard.vue";
import axios from "axios";

export default {
  components: {
    TeamCard,
    NewsCard,
  },
  name: "App",
  data() {
    return {
      news: null,
      loaded: false,
      members: [
        {
          codigo: 1,
          nombre: "Norma Constanza Chilatra Bahamon",
          descripcion: `Soy una profesional formada con alto valores éticos y orientación al
                        cumplimiento de objetivos; Estoy comprometida con la calidad en cada uno
                        de pasos del ciclo de vida del software, me gusta la innovación y estar
                        al día con las nuevas técnicas y estrategias para gestionar los
                        incidentes en el menor tiempo posible y minimizando el costo de los
                        mismos. Me gusta trabajar en equipo y utilizo técnicas de comunicación
                        efectiva, así como compartir el conocimiento para el crecimiento de todo
                        el equipo.`,
          rol: "Desarrollador fullstack",
          email: "normachilatrab@hotmail.com",
          celular: "310-766-6451",
          profesion: "Administradora Financiera y Tecnóloga en Sistemas",
          image:
            "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/131423883_10158040800137762_2287384691833701287_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEm1WVvRmdEniWuu0qP-VT2gLQSND20I9CAtBI0PbQj0KBHI49BYhGv9GpfeXRvpCo&_nc_ohc=UM805WsmqyoAX8cwhaH&_nc_ht=scontent-bog1-1.xx&oh=16397f2c42b705eae50d8fcdcb32d822&oe=5FFD61FA",
        },
        {
          codigo: 2,
          nombre: "Juan Camilo Horta",
          descripcion:
            "Soy una persona con metas claras, comprometido al mejoramiento y buen desempeñó en las áreas asignadas, motivado a seguir en el procesó de aprendizaje trabajando en equipó con mis compañeros. ",
          rol: "Desarrollador backend",
          email: "camilo20113@hotmail.com",
          celular: "3155506711",
          profesion: "Estudiante",
          image: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/90594189_2825525527538145_7825577344143196160_n.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_eui2=AeHTQDjbeZmi66dA-Vkm8t0VTPGQo_bhJLlM8ZCj9uEkud8Gz2xmiAezVdztXZ7c52g&_nc_ohc=dsaOYbWgybEAX81emJK&_nc_ht=scontent-bog1-1.xx&oh=267c69f55b0786271434fc85efbacaf6&oe=5FFE3722",
        },
        {
          codigo: 3,
          nombre: "Juan Manuel Rojas",
          descripcion: `Tecnologo en electrónica, formado en la Universidad Distrital Francisco José De Caldas
                            de la ciudad de Bogotá, con altos valores y con multiples habilidades formadas desde joven.
                            Me gusta la investigación y además la innovación, el trabajo en equipo, el compromiso, responsabilidad
                            ,muy respetuoso y además carismatico.`,
          rol: "Desarrollador backend",
          email: "juancartagena75@hotmail.com",
          celular: "3165795647",
          profesion: "Tecnologo en electrónica",
          image:
            "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/130752990_10225379164815454_8798927684256994399_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFoTqzBAd7mGigjQH4FN0oQ9A4G9M9abFL0Dgb0z1psUm_UBwVQKr2iB-Ti_96nUD8&_nc_ohc=wwOZa7AxWY4AX87iQAo&_nc_ht=scontent-bog1-1.xx&oh=98d266dec496060ba185708e568bcdfa&oe=5FFBBE25",
        },
      ],
    };
  },
  created() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=co&category=technology&pageSize=4&apiKey=a99c5f6b51624b7ca8979772b13752fc"
      )
      .then((response) => {
        console.log(response.data.articles);
        this.news = response.data.articles;
        this.loaded = true;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style>
@import "assets/styles/style.css";
</style>