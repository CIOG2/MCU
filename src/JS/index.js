import HomeHeader from "./components/Home/Header.js";
import HomeMain from "./components/Home/Main.js";

const app = document.getElementById("app");

app.append(HomeHeader(), HomeMain());