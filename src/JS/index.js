import Skeleton from "./components/Skeleton/index.js";

const app = document.getElementById("app");
app.append(Skeleton());



import HomeHeader from "./components/Home/Header.js";
import HomeMain from "./components/Home/Main.js";

setTimeout(() => {    
    setTimeout(() => {
        document.getElementById("container-skeleton").style.opacity = 0;        
        setTimeout(() => {
            document.getElementById("container-skeleton").remove();
        }, 300);

    }, 1000);
    app.append(HomeHeader(), HomeMain());
}, 1000);

// app.append(HomeHeader(), HomeMain());