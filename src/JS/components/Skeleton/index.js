const Skeleton = () => {
    
    const L = document.createElement("span");
    L.textContent = "L";

    const O = document.createElement("span");
    O.textContent = "O";

    const A = document.createElement("span");
    A.textContent = "A";

    const D = document.createElement("span");
    D.textContent = "D";

    const I = document.createElement("span");
    I.textContent = "I";

    const N = document.createElement("span");
    N.textContent = "N";

    const G = document.createElement("span");
    G.textContent = "G";

    const containerSpinner = document.createElement("div");
    containerSpinner.classList.add("spinner");
    containerSpinner.append( L, O, A, D, I, N, G );


    const container = document.createElement("div");
    container.classList.add("container__skeleton");
    container.id = "container-skeleton";
    container.append( containerSpinner );

    return container
}

export default Skeleton;