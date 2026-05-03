const szamolAr = require('./pizza');

test('Egy kicsi pizza 2 feltéttel 1400 Ft', () => {
    expect(szamolAr('kicsi', 2)).toBe(1400);
});

test('Egy nagy pizza feltét nélkül 2000 Ft', () => {
    expect(szamolAr('nagy', 0)).toBe(2000);
});

test('Hibát ad, ha elírjuk a méretet', () => {
    expect(szamolAr('óriás', 0)).toBe("Hiba: Rossz méret!");
});