function preQualificar(carro){
    if(carro.quilometragem > 10000){
        return false;
    } else if(carro.ano > 2010){
        return false;
    }
    return true;
}

let carro1 = {
    modelo : "Gol",
    marca : "VW",
    motor : "1.0",
    ano : 2009,
    cor : "Branco",
    passageiros : 5,
    quilometragem : 9700, 
};

let valeAPena = preQualificar(carro1);

if(valeAPena){
    console.log(`Você tem que dar uma olhada nesse ${carro1.marca} ${carro1.modelo} ${carro1.motor}`);
} else {
    console.log(`Acho que não é uma boa ideia comprar esse ${carro1.marca} ${carro1.modelo} ${carro1.motor}`);
}