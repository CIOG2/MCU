const HomeMain = () => {

    const imagen = document.createElement('img');
    imagen.src = 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_mas_dsk_06.jpg';
    imagen.alt = 'doctor strange multiverse of madness';

    const degradado = document.createElement('div');
    degradado.classList.add('degradado');

    const main = document.createElement("main");
    main.classList.add("Home__main");
    main.append( degradado,imagen );    

    
    return main;
}

export default HomeMain;