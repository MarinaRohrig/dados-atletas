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
    this.imc = this.peso / (this.altura * this.altura).toFixed(2);
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
    this.media = (soma / (this.notas.length-2)).toFixed(2);
    return this.media;
   }
obtemNomeAtleta(){
    console.log(`Nome: ${this.nome}`);
    return this.nome;
}
obtemIdadeAtleta(){
    console.log(`Idade: ${this.idade}`);
    return this.idade;
}
obtemPesoAtleta(){
    console.log(`Peso: ${this.peso}`);
    return this.peso;
}
obtemNotasAtleta(){
  console.log(`Notas: ${this.notas.join(`, `)}`);
    return this.notas;
}
obtemCategoria(){
    console.log(`Categoria: ${this.categoria}`)
    return this.categoria;
}
obtemIMC(){
    console.log(`Imc: ${this.imc}`);
    return this.imc;
}// que retorna o IMC do atleta
obtemMediaValida(){
  console.log(`Média: ${this.media}`);
    return this.media;
    }
}

let atleta = new Atleta ("Marina",25,76.5,1.58,[6,10,7,5,8.55]);
atleta.calculaCategoria(10);
atleta.calculaIMC();
atleta.calculaMediaValida();
atleta.obtemNomeAtleta();
atleta.obtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemNotasAtleta();
atleta.obtemCategoria();
atleta.obtemIMC();
atleta.obtemMediaValida();