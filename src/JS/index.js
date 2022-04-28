import Skeleton from './components/Skeleton/index.js';
import LocalStorage from './utils/LocalStorage.js';

const app = document.getElementById('app');
app.append(Skeleton());


const RenderHome = () => {
    import('./components/Home/Header.js').then(({ default: HomeHeader }) => {
        import('./components/Home/Main.js').then(({ default: HomeMain }) => {
            setTimeout(() => {
                document.getElementById('container-skeleton').style.opacity = 0;        
                setTimeout(() => {
                    document.getElementById('container-skeleton').remove();
                }, 300);
            }, 50);
            app.append(HomeHeader(),HomeMain());
        });
    });
}


const RenderLogin = () => {
    import('./components/App/Header.js').then(({ default: HeaderApp }) => {
        import('./components/App/Main.js').then(({ default: MainApp }) => {
            const URL = 'http://gateway.marvel.com/v1/public/comics?' + 'ts=1&' + 'apikey=f0e19811f698d5811e406c3d63e85904' + '&hash=0c66bbd2792f54c04df7e03d8d93e65c';
           
            window.fetch(URL)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    document.getElementById('container-skeleton').style.opacity = 0;        
                    setTimeout(() => {
                        document.getElementById('container-skeleton').remove();
                    }, 300);
                }, 50);
                app.append(HeaderApp(),MainApp(data.data.results));    
            })
        });
    }); 
}


setTimeout(() => {    
    let data = LocalStorage().get('MCU');
    if (!(data === null)) {
        if (data.login) {
            if (data.login.rememberMe) {
                RenderLogin();
            }else if(data.login.fastLogin){
                delete data.login.fastLogin;
                LocalStorage().set('MCU', data);
                RenderLogin();
            }else{
                RenderHome();
            }
        }else{
            RenderHome();
        }
    }else{
       RenderHome(); 
    }
}, 1000);