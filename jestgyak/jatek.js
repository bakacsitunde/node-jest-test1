function jatekSzamok(gondoltszam,pont){
    let gepszam=5

    let eredmeny=""
    while(pont>0){
    if(gondoltszam===gepszamszam){
        eredmeny="nyert"
    }
    else if(gondoltszam!=gepszam){
        pont-=1
    }
}
    return pont
}
module.exports=jatekSzamok