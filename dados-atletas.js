class Atleta {
    constructor(nome,idade,peso,altura,notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    }

    calculaCategoria(){
        if (this.idade < 9 || this.idade > 30){
            this.categoria =`Sem categoria`;
        }else if (this.idade <= 11){
            this.categoria = "Infantil";
        }else if(this.idade <= 13){
            this.categoria = "Juvenil";
        }else if(this.idade <= 15){
            this.categoria = "Intermediário";
        }else if (this.idade <= 30){
            this.categoria = "Adulto";
        }
        return this.categoria;
    }
calculaIMC(){
    this.imc = this.peso / (this.altura * this.altura);
    return this.imc;
}

calculaMediaValida(){
    let soma = 0;
    this.notas.sort(function(a,b){
        return a-b;
        });
        for (let i = 1; i < this.notas.length-1; i++){
            soma += this.notas[i];
        }
    this.media = (soma / (this.notas.length-2));
    return this.media;
   }
obtemNomeAtleta(){
    return this.nome;
}
obtemIdadeAtleta(){
    return this.idade;
}
obtemPesoAtleta(){
    return this.peso;
}
obtemNotasAtleta(){
    return this.notas;
}
obtemCategoria(){
    return this.calculaCategoria();
}
obtemIMC(){
    return this.calculaIMC();
}// que retorna o IMC do atleta
obtemMediaValida(){
    return this.calculaMediaValida();
    }
}

let atleta = new Atleta ("Marina",25,76.5,1.58,[6,10,7,5,8.55]);
console.log(atleta.calculaCategoria(10));
console.log(atleta.calculaIMC());
console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());