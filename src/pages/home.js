//template base del home

import getData from '../utils/getData'

const Home = async () =>{
    const characters = await getData()
    const view = `
    <section class="invitados contenedor seccion">
    <ul class="Characters">
        ${characters.map(character =>`
            <li>
                <div class="invitado">
                    <img src=${character.img} alt="">
                    <p><strong>Numero:</strong>${character.n_key}<br><strong>Modelo:</strong>${character.modelo}<br><strong>Marca:</strong>${character.marca}<br></p>
                </div>
            </li>
            `
        ).join('')}
        </ul>
        </section>
    `;

    return view;

};


export default Home;