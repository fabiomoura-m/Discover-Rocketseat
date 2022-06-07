//Union
function printUserId(id: number | string) {
  console.log(`O ID do usuário é: ${id}`);
}
printUserId('15');
printUserId(10);

//Generics

/*
S => state
T => type
K => key
V => value
E => element
*/
function useState<T extends string | number = number>() {
  // pode ser do tipo string ou number e caso não seja passado na declaração o tipo, ela assume o tipo number.
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState(); // como não foi passado o tipo, ela está assumindo tipo number.
newState.get();
newState.set('Fabio');
newState.set(123);

let newState2 = useState<string>(); // aqui já passando que será tipo string.
newState2.get();
newState2.set('Fabio');
newState2.set(123);

// Type
type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

userId = '1';
userId = true;
userId = 123;

// Type Assertions
type UserResponse = {
  id: number;
  name: string;
  avatar: string;
};
let userResponse = {} as UserResponse; // como se tivesse convertendo o tipo do objeto para o tipo UserResponse.
userResponse.id = 10;

// Objeto
type Point = {
  x: number;
  y: number;
};
function printCoord(points: Point) {
  console.log(`O eixo x é: ${points.x}`);
  console.log(`O eixo y é: ${points.y}`);
}
printCoord({ x: 101, y: 20 });

type User = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean; // o ? deixa como opcional a propriedade
};

let newUser: User = {
  name: 'ola',
  email: 'email@email.com',
  age: 20
};

// Intersecção de Tipos - união de tipos
type User1 = {
  id: number;
  name: string;
};

type Char = {
  nickname: string;
  level: number;
};

type PlayerInfo = User1 & Char;

let info: PlayerInfo = {
  name: 'fabio',
  id: 1,
  nickname: 'fabio1',
  level: 10
};

// Interface - outra forma de declarar tipos
interface User2 {
  id: number;
  name: string;
}

let newUser1: User2 = {
  name: 'fabio',
  id: 2
};

// Diferença de Type e Interface
type TUser = {
  id: number;
  name: string;
};
type TPayment = {
  method: string;
};
type TAccount = TUser & TPayment;

interface IUser {
  id: number;
  name: string;
}
interface IPayment {
  method: string;
}
interface IAccount extends IUser, IPayment {}
