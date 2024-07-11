// document.addEventListener('DOMContentLoaded', function () {
//     ScrollReveal().reveal('.textLogin', { delay: 200, origin: 'top', distance: '50px' });
//     ScrollReveal().reveal('.input-container', { delay: 200, origin: 'right', distance: '50px' });
//     ScrollReveal().reveal('.loginButton', { delay: 200, origin: 'bottom', distance: '100px' });

//     ScrollReveal().reveal('.titleLoged', { delay: 200, origin: 'right', distance: '50px' });
//     ScrollReveal().reveal('.textLoged.part1', { delay: 200, origin: 'left', distance: '50px' });
//     ScrollReveal().reveal('.textLoged.part2', { delay: 200, origin: 'right', distance: '50px' });
//     ScrollReveal().reveal('.textLoged.part3', { delay: 200, origin: 'left', distance: '50px' });
//     ScrollReveal().reveal('.preTresMil', { delay: 200, origin: 'right', distance: '50px' });
//     ScrollReveal().reveal('.tresMil', { delay: 200, origin: 'left', distance: '50px' });
//     ScrollReveal().reveal('.playList', { delay: 200, origin: 'right', distance: '50px' });
//     ScrollReveal().reveal('a', { delay: 200, origin: 'left', distance: '50px' });
// });

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let body = document.querySelector('body')

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'ellieperry' && password === '17092023') {
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
        Toastify({
            text: "Sesión iniciada.",
            duration: 3000,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "#00B574",
              fontSize: "14px",
              borderRadius: "15px",
              boxShadow: "none"

            },
            onClick: function(){} 
          }).showToast();
          body.innerHTML = `
                    <section class="LogedContainer" >
                    <p class="titleLoged">Bienvenida <strong>Ellieperry</strong></p>
                    <div class="textLogedContainer">
                        <p class="textLoged part1">
                            Tuve que ponerle seguridad a la pagina para que no descubran tu identidad secreta, y todo lo que solamente se yo, como que en realidad estas cumpliendo 13 y no 20 como lo pintas, o que tenés un trastorno de personalidad con los personajes mas irrelevantes de las películas, porque sabes que tu personalidad es un conjunto de personas especiales y no de protagonistas escritos para dar cringe de lo falsas y forzadas que son sus escenas como el pelotudo de Harry Potter, bueno nada me voy a poner mas romántico.
                        </p>
                        <p class="textLoged part2">
                            Mentira sabes que no soy el mas romántico y a veces soy mas de bolasearte pero aca me tenés haciéndote una pagina web porque siento que cualquier regalo que te haga va a ser poco para lo que en realidad te mereces, porque sos una persona increíble, de verdad no se como muchas veces me aguantas y peleas por lo que tenemos, me aguantas sabiendo que soy insoportable en muchas ocasiones un pesado, un intenso, no se. Gracias de verdad por ser como sos conmigo y con las personas que te rodean, llenas de luz y brillo todo lo que te rodea, sos tan increíble que tuve que dedicarte una playlist de 3 horas (por ahora) para ser mas poético en decirte como me haces sentir, porque se me acaban las palabras y los adjetivos, tanto que en algún momento le tendré que preguntar a la rochi nuevas formas de describirte, o que vos descubras nuevos rasgos de tu personalidad para describirte de otras forma.
                        </p> 
                        <p class="textLoged part3">
                            Gracias de verdad por ser tan pura y amorosa con tus emociones, me ayudas en los momentos mas difíciles y potencias mis sentimientos siempre que estamos juntos, porque cada dia con vos es hermoso,desde hace un año y me hace dar cuenta que sos la mujer con la que quiero estar el resto de mi vida, porque eres tu no quiero a nadie mas diría un amigo de méxico que se hace llamar como una marca de chocolate, y nada no quiero hacer mas largo esto porque después en una pagina web se va a ver re contra largo en celular asique corto aca.
                        </p>
                    </div>

                    <div class="containerPhotos">
                        <img src="img/023.jpeg" alt="Imagen 23" class="imgAlbum">
                        <img src="img/017.jpeg" alt="Imagen 17" class="imgAlbum">
                        <img src="img/038.jpeg" alt="Imagen 38" class="imgAlbum">
                        <img src="img/004.jpeg" alt="Imagen 4" class="imgAlbum">
                        <img src="img/056.jpeg" alt="Imagen 56" class="imgAlbum">
                        <img src="img/031.jpeg" alt="Imagen 31" class="imgAlbum">
                        <img src="img/029.jpeg" alt="Imagen 29" class="imgAlbum">
                        <img src="img/014.jpeg" alt="Imagen 14" class="imgAlbum">
                        <img src="img/062.jpeg" alt="Imagen 62" class="imgAlbum">
                        <img src="img/047.jpeg" alt="Imagen 47" class="imgAlbum">
                        <img src="img/007.jpeg" alt="Imagen 7" class="imgAlbum">
                        <img src="img/051.jpeg" alt="Imagen 51" class="imgAlbum">
                        <img src="img/032.jpeg" alt="Imagen 32" class="imgAlbum">
                        <img src="img/027.jpeg" alt="Imagen 27" class="imgAlbum">
                        <img src="img/049.jpeg" alt="Imagen 49" class="imgAlbum">
                        <img src="img/020.jpeg" alt="Imagen 20" class="imgAlbum">
                        <img src="img/013.jpeg" alt="Imagen 13" class="imgAlbum">
                        <img src="img/044.jpeg" alt="Imagen 44" class="imgAlbum">
                        <img src="img/008.jpeg" alt="Imagen 8" class="imgAlbum">
                        <img src="img/025.jpeg" alt="Imagen 25" class="imgAlbum">
                        <img src="img/011.jpeg" alt="Imagen 11" class="imgAlbum">
                        <img src="img/061.jpeg" alt="Imagen 61" class="imgAlbum">
                        <img src="img/016.jpeg" alt="Imagen 16" class="imgAlbum">
                        <img src="img/043.jpeg" alt="Imagen 43" class="imgAlbum">
                        <img src="img/002.jpeg" alt="Imagen 2" class="imgAlbum">
                        <img src="img/053.jpeg" alt="Imagen 53" class="imgAlbum">
                        <img src="img/010.jpeg" alt="Imagen 10" class="imgAlbum">
                        <img src="img/022.jpeg" alt="Imagen 22" class="imgAlbum">
                        <img src="img/033.jpeg" alt="Imagen 33" class="imgAlbum">
                        <img src="img/041.jpeg" alt="Imagen 41" class="imgAlbum">
                        <img src="img/030.jpeg" alt="Imagen 30" class="imgAlbum">
                        <img src="img/015.jpeg" alt="Imagen 15" class="imgAlbum">
                        <img src="img/058.jpeg" alt="Imagen 58" class="imgAlbum">
                        <img src="img/018.jpeg" alt="Imagen 18" class="imgAlbum">
                        <img src="img/037.jpeg" alt="Imagen 37" class="imgAlbum">
                        <img src="img/012.jpeg" alt="Imagen 12" class="imgAlbum">
                        <img src="img/009.jpeg" alt="Imagen 9" class="imgAlbum">
                        <img src="img/021.jpeg" alt="Imagen 21" class="imgAlbum">
                        <img src="img/052.jpeg" alt="Imagen 52" class="imgAlbum">
                        <img src="img/046.jpeg" alt="Imagen 46" class="imgAlbum">
                        <img src="img/034.jpeg" alt="Imagen 34" class="imgAlbum">
                        <img src="img/048.jpeg" alt="Imagen 48" class="imgAlbum">
                        <img src="img/055.jpeg" alt="Imagen 55" class="imgAlbum">
                        <img src="img/001.jpeg" alt="Imagen 1" class="imgAlbum">
                        <img src="img/039.jpeg" alt="Imagen 39" class="imgAlbum">
                        <img src="img/057.jpeg" alt="Imagen 57" class="imgAlbum">
                        <img src="img/005.jpeg" alt="Imagen 5" class="imgAlbum">
                        <img src="img/060.jpeg" alt="Imagen 60" class="imgAlbum">
                        <img src="img/028.jpeg" alt="Imagen 28" class="imgAlbum">
                        <img src="img/019.jpeg" alt="Imagen 19" class="imgAlbum">
                        <img src="img/042.jpeg" alt="Imagen 42" class="imgAlbum">
                        <img src="img/050.jpeg" alt="Imagen 50" class="imgAlbum">
                        <img src="img/036.jpeg" alt="Imagen 36" class="imgAlbum">
                        <img src="img/024.jpeg" alt="Imagen 24" class="imgAlbum">
                        <img src="img/054.jpeg" alt="Imagen 54" class="imgAlbum">
                        <img src="img/045.jpeg" alt="Imagen 45" class="imgAlbum">
                        <img src="img/006.jpeg" alt="Imagen 6" class="imgAlbum">
                        <img src="img/035.jpeg" alt="Imagen 35" class="imgAlbum">
                        <img src="img/003.jpeg" alt="Imagen 3" class="imgAlbum">
                        <img src="img/063.jpg" alt="Imagen 63" class="imgAlbum">
                        <img src="img/040.jpeg" alt="Imagen 40" class="imgAlbum">
                        <img src="img/059.jpeg" alt="Imagen 59" class="imgAlbum">
                        <img src="img/026.jpeg" alt="Imagen 26" class="imgAlbum">

                    </div>

                    <div class="finalLoged">
                        <p class="preTresMil">Duermo tranquilo solo de pensar que me espera una vida pagandole espacio a apple por tener la galeria explotada de fotos como estas.</p>

                        <p class="playList">Te dejo aki el link a nuestra playlist para que nunca lo pierdas.</p>
                        <a target="_blank" href="https://open.spotify.com/playlist/3MaqoGHaFCD29tvGln8UqG?si=b2b4b081e76d4953&pt=2c2323285ebcc0989eeec906dba0309f">
                            <img src="img/playlist.png" alt="">
                        </a>
                        <p class="tresMil">Te amo 3 millones mi baby groot</p>
                    </div>
                </section>
          `;
            // ScrollReveal().reveal('.titleLoged', { delay: 200, origin: 'right', distance: '50px' });
            // ScrollReveal().reveal('.textLoged.part1', { delay: 200, origin: 'left', distance: '50px' });
            // ScrollReveal().reveal('.textLoged.part2', { delay: 200, origin: 'right', distance: '50px' });
            // ScrollReveal().reveal('.textLoged.part3', { delay: 200, origin: 'left', distance: '50px' });
            // ScrollReveal().reveal('.preTresMil', { delay: 200, origin: 'right', distance: '50px' });
            // ScrollReveal().reveal('.tresMil', { delay: 200, origin: 'left', distance: '50px' });
            // ScrollReveal().reveal('.playList', { delay: 200, origin: 'right', distance: '50px' });
            // ScrollReveal().reveal('a', { delay: 200, origin: 'left', distance: '50px' });
            
       
 


        
        
          
    } else {
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
        Toastify({
            text: "Salí de acá, devolveme a mi novia",
            duration: 3000,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "#B50057",
              fontSize: "14px",
              borderRadius: "15px",
              boxShadow: "none"

            },
            onClick: function(){} 
          }).showToast();
    }
});


