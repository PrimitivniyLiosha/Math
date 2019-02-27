const trapecyia = (a, b, n) => {
    if (a < b && n < b) {
        let s = 0;
        let h = (b - a) / n;
        let x = a + h;
        let fx = x * x;
        let f = 0;
        let fa = 0;
        let fb = 0;
        for (let i = x; i < b; i++) {
            if (x < b) {
                f += fx;
                s += f;
                x += h;
            } else {
                fa = a * a;
                fb = b * b;
                s = (h / n) * (fa + fb + 2 * s);
            }
        }
        console.log(s);
    } else {
        console.log("please write numbers who corrected this rule  : a < b && n < b");
    }
}

trapecyia(1, 8, 7);
trapecyia(2, 4, 4);