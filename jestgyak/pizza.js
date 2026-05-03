function szamolAr(meret, feltetekSzama) {
    let alapAr = 0;

    if (meret === 'kicsi') alapAr = 1000;
    if (meret === 'nagy') alapAr = 2000;

    if (alapAr === 0) return "Hiba: Rossz méret!";

    return alapAr + (feltetekSzama * 200);
}

module.exports = szamolAr;