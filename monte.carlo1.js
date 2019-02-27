const monteCarlo = (a, b, n) => {
    let minx = a;
    let maxx = b;
    let fx = a * a;
    let miny = fx;
    let maxy = fx;
    let k1 = 0;
    let randx = 0;
    let randy = 0;
    let frandx = 0;
    let integrate = 0;
    for (let i = a; i <= b; i++) {
        a += 0.01;
        miny = fx;
        maxy = a;
    }
    for (let i = n; i < 10; i++) {
        randx = minx + (maxx - minx) * Math.random();
        randy = miny + (maxy - miny) * Math.random();
        frandx = randx * randx;
        if (randy <= frandx) {
            k1 += 1;
        }
    }
    integrate = ((maxx - minx) * (maxy - miny)) * (k1 / n);
    console.log("integrate => " + integrate + ";" + " " + "maxx => " + maxx + ";" + " " + "minx => " + minx + ";" + " " + "maxy => " + maxy + ";" + " " + "miny => " + miny + ";" + " " + "k1 => " + k1 + ";" + " " + "n => " + n + ";");
}
monteCarlo(1, 6, 1);
monteCarlo(1, 9, 1);
monteCarlo(1, 3, 1);