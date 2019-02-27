const priampugolnik = (a, b, n) => {
    let x = a;
    let fx = x * x;
    let s = 0;
    let h = (b - a) / n;
    for (let i = a; i <= b; i++) {
        if (x <= b) {
            s += fx;
            x += x + h;
        } else {
            s = h * s;
        }
    }
    console.log(s);
}
priampugolnik(2, 5, 4);