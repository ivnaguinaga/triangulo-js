function constru() {
    let long = document.getElementById('triangulo').value;
    let space = ' ';
    let piramide = ' ';

    for (i = 0; i < long; i++) {
        piramide += "#";
        space += "<p>" + piramide + "</p>";
    }
    document.getElementById("con").innerHTML = space;
}