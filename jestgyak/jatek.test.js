const jatekSzamok = require('./jatek');

test('Egy rossz válasz esetén 9 lesz a pontszám', () => {
    expect(jatekSzamok(4, 10)).toBe(9);
});