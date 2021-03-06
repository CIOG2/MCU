import Register from '../Register/index.js';

const HomeMain = () => {

    const image = document.createElement('img');
    image.src = 'https://i.ibb.co/C8sS3Db/Doctor-Strange.jpg';
    image.alt = 'doctor strange multiverse of madness';

    
    const title = document.createElement('h1');
    title.textContent = 'UNIVERSO MARVEL';
    title.classList.add('Home__Main--title');

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Se parte del universo del univeso cinematografico mas grande que de la ciencia ficcion y la fantasía. Conoce a los personajes mas grandes de la historia, y descubre todo sobre el universo de Marvel.';
    subtitle.classList.add('Home__Main--subtitle');


    const buttonJoin = document.createElement('button');
    buttonJoin.textContent = 'Unirse';
    buttonJoin.classList.add('Home__main--join');
    buttonJoin.id = 'button-join';
    buttonJoin.addEventListener('click', () => {
        document.getElementById('app').appendChild(Register());
        document.getElementById("container-main-elements").style.opacity = "0";
    });


    const containerElements = document.createElement('div');
    containerElements.classList.add('Home__main--elments');
    containerElements.id = 'container-main-elements';
    containerElements.append( title,subtitle, buttonJoin);


    const degradado = document.createElement('div');
    degradado.classList.add('degradado');

    const main = document.createElement("main");
    main.classList.add("Home__main");
    main.append( degradado, image, containerElements );    

    
    return main;
}

export default HomeMain;