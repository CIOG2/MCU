const MainApp = (data) => {

    const elements = [];

    data.forEach(element => {
        if (!element.thumbnail.path.includes('image_not_available')) {            
            console.log(element); 

            const containerElement = document.createElement('div');
            containerElement.classList.add('main__app--containers');

            const imgElement = document.createElement('img');
            imgElement.classList.add('main__app--img');
            imgElement.src = element.thumbnail.path +"."+ element.thumbnail.extension;
    
            
            const titleElement = document.createElement('h2');
            titleElement.classList.add('main__app--title');
            titleElement.innerHTML = element.title;

            containerElement.append( imgElement, titleElement );

            elements.push(containerElement);
        }
    });

    const Main = document.createElement('main');
    Main.classList.add('main__app');
    Main.append(...elements);
    
    
    return Main;
}

export default MainApp;