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
}

let atleta = new Atleta ("Marina",25,76.5,1.58,[6,10,7,5,8.55]);
console.log(atleta.calculaCategoria(10));