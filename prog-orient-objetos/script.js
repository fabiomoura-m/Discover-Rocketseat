// Classes em JavaScript

// definir classe
class Pessoa {
  constructor(nome) {
    this.id = ~~(Math.random() * 100000);
    this.nome = nome;
  }

  dizerNome() {
    console.log(this.nome);
  }
}

// criar objeto
const pessoa = new Pessoa('mayk');

// Encapsulamento no código JavaScript

// código Estrutural
let altura = 50;
let largura = 60;

function calcularArea() {
  return altura * largura;
}

let area = calcularArea();

// Orientado a Objetos
class Poligono {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  get area() {
    return this.#calcularArea();
  }

  #calcularArea() {
    return this.altura * this.largura;
  } // a has # fala que não terá acesso lá fora, apenas dentro da classe
}
// criar objeto
let poligono = new Poligono(50, 60);
console.log(poligono);
console.log(poligono.area);
// console.log(poligono.#calcularArea()); // erro pois esse método só é usado dentro da classe

// Programação Estruturada vs Orientada a Objetos

// estruturado
let valorHora = 50;
let tempoEstimado = 20;
let desconto = valorHora * tempoEstimado * (10 / 100);
let custoEstimado = valorHora * tempoEstimado - desconto;
console.log(custoEstimado);

// POO
// const job = new Job();
// job.valorHora = 50;
// job.tempoEstimado = 20;
// job.desconto = 10;
// const custooEstimado = job.calcularEstimativa();

// Herança

class Veiculo {
  rodas = 4;

  mover(direcao) {}
  virar(direcao) {}
}

class Moto extends Veiculo {
  constructor() {
    super(); // puxar atributos e métodos do pai
    this.rodas = 2;
  }
}

// Polimorfismo

class Atleta {
  peso;
  categoria;

  constructor(peso) {
    this.peso = peso;
  }

  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = 'infantil';
    } else if (this.peso <= 65) {
      this.categoria = 'juvenil';
    } else {
      this.categoria = 'adulto';
    }
  }
}

class Lutador extends Atleta {
  constructor(peso) {
    super(peso);
  }

  definirCategoria() {
    if (this.peso <= 54) {
      this.categoria = 'pluma';
    } else if (this.peso <= 60) {
      this.categoria = 'leve';
    } else if (this.peso <= 75) {
      this.categoria = 'meio-leve';
    } else {
      this.categoria = 'pesado';
    }
  }
}

// Abstração

//definir
class Parafuso {
  // Superclasse - Abstrata
  constructor() {
    if (this.constructor === Parafuso)
      throw new Error('Classe abstrata não pode ser instanciada');
  }
  get tipo() {
    throw new Error("Método 'get tipo()' precisa der implementado");
  }
}

class Fenda extends Parafuso {
  constructor() {
    super();
  }
  get tipo() {
    return 'fenda';
  }
}

class Philips extends Parafuso {
  constructor() {
    super();
  }
  get tipo() {
    return 'philips';
  }
}

class Allen extends Parafuso {}

// criar e usar
// new Parafuso(); // Error: Classe abstrata não pode ser instanciada
let fenda = new Fenda();
let philips = new Philips();
let allen = new Allen();
console.log(fenda.tipo, philips.tipo);
console.log(allen.tipo); // Error: Método 'get tipo()' precisa der implementado
