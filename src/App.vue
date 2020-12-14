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
                <div class="container-imagen">
                </div>
            </div>
            <div class="section-1" id="services">
                <p class="section-text"></p>
                <div class="col-3">
                    <p>
                        <img alt="servicio 1" src="../src/assets/images/servicio1.jpg">
                    </p>
                    <div class="service-content">
    
                        <h1>
                            Desarrollo de Software
                        </h1>
                        <p class="service-text">
                            Diseñamos estrategias de crecimiento que permitan trazar nuevas oportunidades para su negocio.
                        </p>
                    </div>
                </div>
                <div class="col-3">
                    <p>
                        <img alt="servicio 2" src="../src/assets/images/servicio2.jpg">
                    </p>
                    <div class="service-content">
    
                        <h1>
                            Analisís de Datos
                        </h1>
                        <p class="service-text">
                            Ayudamos al negocio a entender los insights que arrojan sus datos de cara a la mejora continua.
                        </p>
                    </div>
                </div>
                <div class="col-3">
                    <p>
    
                        <img alt="servicio 3" src="../src/assets/images/servicio3.jpg">
                    </p>
                    <div class="service-content">
    
                        <h1>
                            Transformación Digital
                        </h1>
                        <p class="service-text">
                            Impulsamos las últimas tecnologías para ayudar a las organizaciones a transformarse
                        </p>
                    </div>
                </div>
            </div>
    
            <div class="section-2" id="news">
                <p class="section-text"></p>
                <div class="section-news">
    
                    <div class="news">
                        <div class="news-data">
                            <div class="news-image">
                                <img alt="noticia 1" src="../src/assets/images/noticia1.png">
                            </div>
                            <div class="news-text">
                                <h2 class="news-title">Los robotaxis autónomos arrancan en China</h2>
                                <hr>
                                <p class="news-info" style="margin:0; padding:0;">
                                    Los avances en el campo de la Inteligencia Artificial pueden arrollar con todo lo
                                    conocido en los próximos años. En el mundo del transporte empieza a cobrar cada vez más
                                    sentido automatizar la conducción ante el desafío de acercarse a la siniestralidad cero.
                                </p>
                                <span class="news-url"><a
                                        href="https://www.abc.es/motor/abci-robotaxis-autonomos-arrancan-china-202012031049_noticia.html"
                                        target="_blank">Leer noticia completa >></a></span>
                            </div>
                        </div>
                        <div class="news-data">
                            <div class="news-image">
                                <img alt="noticia 2" src="../src/assets/images/noticia2.jpg">
                            </div>
                            <div class="news-text">
                                <h2 class="news-title">Los largos tentáculos de Amazon: cómo su revolución amenaza la
                                    economía global</h2>
                                <hr>
                                <p class="news-info" style="margin:0; padding:0;">La evolución de Amazon es digna de
                                    estudio. Es el paradigma del emprendimiento: se creó en un garaje y ha conquistado el
                                    mundo. Representa el esfuerzo de un hombre, Jeff Bezos, una de las personas más ricas
                                    del mundo. Austero y discreto, ha aplicado su personalidad al modelo empresarial del
                                    gigante del comercio electrónico.</p>
                                <span class="news-url"><a
                                        href="https://www.abc.es/tecnologia/redes/abci-largos-tentaculos-amazon-como-revolucion-amenaza-economia-global-202011270115_noticia.html"
                                        target="_blank">Leer noticia completa >></a></span>
                            </div>
                        </div>
                    </div>
                    <div class="news">
                        <div class="news-data">
    
                            <div class="news-image">
                                <img alt="noticia 3" src="../src/assets/images/noticia3.jpg">
                            </div>
                            <div class="news-text">
                                <h2 class="news-title">
                                    Italia multa con 10 millones de euros a Apple por engañar en la resistencia al agua</h2>
                                <hr>
                                <p class="news-info" style="margin:0; padding:0;">
                                    El organismo italiano acusa a Apple de mentir en sus anuncios de varios modelos lanzados
                                    en los últimos años como los iPhone 8, iPhone XS o iPhone 11 y sus respectivas
                                    variantes. El regulador entiende que el fabricante estadounidense «no dejó en claro que
                                    esta característica existe bajo ciertas condiciones específicas»</p>
                                <span class="news-url"><a
                                        href="https://www.abc.es/tecnologia/moviles/telefonia/abci-italia-multa-10-millones-euros-apple-enganar-resistencia-agua-iphone-202012011109_noticia.html"
                                        target="_blank">Leer noticia completa >></a></span>
                            </div>
                        </div>
                        <div class="news-data">
    
                            <div class="news-image">
                                <img alt="noticia 4" src="../src/assets/images/noticia4.jpg">
                            </div>
                            <div class="news-text">
                                <h2 class="news-title">EE.UU. acusa a Google de prácticas monopolísticas</h2>
                                <hr>
                                <p class="news-info" style="margin:0; padding:0;">Es el mayor desafío jurídico para el
                                    gigante tecnológico en décadas. El Departamento de Justicia de Estados Unidos, y otros
                                    11 estados pertenecientes a la Unión, han presentado este martes una demanda contra
                                    Alphabet, empresa matriz de Google, por supuestas prácticas monopolísticas en el mercado
                                    de las búsquedas.</p>
                                <span class="news-url"><a
                                        href="https://www.abc.es/tecnologia/redes/abci-eeuu-acusa-google-practicas-monopolisticas-mercado-busquedas-202010201709_noticia.html"
                                        target="_blank">Leer noticia completa >></a></span>
                            </div>
                        </div>
    
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

import TeamCard from './components/TeamCard.vue'

export default {
  components: { TeamCard },
  name: 'App',
  data() {
    return {
      members: [
        {
          codigo: 1,
          nombre: 'Norma Constanza Chilatra Bahamon',
          descripcion: `Soy una profesional formada con alto valores éticos y orientación al
                        cumplimiento de objetivos; Estoy comprometida con la calidad en cada uno
                        de pasos del ciclo de vida del software, me gusta la innovación y estar
                        al día con las nuevas técnicas y estrategias para gestionar los
                        incidentes en el menor tiempo posible y minimizando el costo de los
                        mismos. Me gusta trabajar en equipo y utilizo técnicas de comunicación
                        efectiva, así como compartir el conocimiento para el crecimiento de todo
                        el equipo.`,
          rol: 'Desarrollador fullstack',
          email: 'normachilatrab@hotmail.com',
          celular: '310-766-6451',
          profesion: 'Administradora Financiera y Tecnóloga en Sistemas',
          image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/131423883_10158040800137762_2287384691833701287_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEm1WVvRmdEniWuu0qP-VT2gLQSND20I9CAtBI0PbQj0KBHI49BYhGv9GpfeXRvpCo&_nc_ohc=UM805WsmqyoAX8cwhaH&_nc_ht=scontent-bog1-1.xx&oh=16397f2c42b705eae50d8fcdcb32d822&oe=5FFD61FA'
        },
        {
          codigo: 2,
          nombre: 'Juan Camilo Horta',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          rol: 'Desarrollador backend',
          email: '',
          celular: '',
          profesion: '',
          image: 'path/to/image'
        },
        {
          codigo: 3,
         nombre: 'Juan Manuel Rojas',
          descripcion: `Tecnologo en electrónica, formado en la Universidad Distrital Francisco José De Caldas
                            de la ciudad de Bogotá, con altos valores y con multiples habilidades formadas desde joven.
                            Me gusta la investigación y además la innovación, el trabajo en equipo, el compromiso, responsabilidad
                            ,muy respetuoso y además carismatico.`,
          rol: 'Desarrollador backend',
          email: 'juancartagena75@hotmail.com',
          celular: '3165795647',
          profesion: 'Tecnologo en electrónica',
          image: 'https://www.instagram.com/p/CBB1bnAs_BVsCzDw7pKI921JXQqUfaDySFsVi40/'
        }
      ]
    }
  }
}
</script>

<style>
  @import 'assets/styles/style.css';
</style>