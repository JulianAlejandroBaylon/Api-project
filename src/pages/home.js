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
                    <p><strong>Name:</strong>${character.name}<br><strong>nickname:</strong>${character.nickname}<br><strong>Birthday:</strong>${character.birthday}<br><strong>Status:</strong>${character.status}</p>
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