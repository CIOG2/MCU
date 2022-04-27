import Skeleton from './components/Skeleton/index.js';
import LocalStorage from './utils/LocalStorage.js';

const app = document.getElementById('app');
app.append(Skeleton());


setTimeout(() => {    
    let data = LocalStorage().get('MCU');

    if (!(data === null)) {

        if (data.login.rememberMe === true) {
            
        }else{
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
    }else{
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
}, 1000);

// app.append(HomeHeader(), HomeMain());