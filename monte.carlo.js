let method_monte_carlo = (x1, x2, c1, c2) => {
    let r1 = 0;
    let r2 = 0;
    let N1 = 0;
    let N2 = 0;
    let result = 0;
    let F = 0;
    let s = 0;
    if (x1 < x2 && c1 < c2) {
        for (let i = 0; i < 1000; i++) {
            r1 = x1 + (x2 - x1) * Math.random();
            r2 = c1 + (c2 - c1) * Math.random();
            F = r1 / 2;
            if (F >= r2) {
                N1 += 1;
                N2 += 1;
            }
            else {
                N1 += 1;
            }
        }
    }
    else {
        return "x1 dont`t can be big before x2 or c1 big before c2"
    }
    s = (c2 - c1) * (x2 - x1)
    result = N1 / N2 * s;
    return result;
};

console.log(method_monte_carlo(7, 9, 3, 9));
