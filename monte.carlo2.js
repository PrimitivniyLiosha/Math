const monteCarlo = (a, b, n) => {
    let minx = a;
    let maxx = b;
    let s = 0;
    let randx = 0;
    let frandx = 0;
    let integrate = 0;
    for (let i = n; i < 10; i++) {
        randx = minx + (maxx - minx) * Math.random();
        frandx = randx * randx;
        s += frandx;
    }
    integrate = (b - a) * (s / n);
    console.log(integrate);
}
monteCarlo(1, 3, 1);