const { log } = console;
/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
const sum = function calculateSum( x, y ) {
  return ( x + y );
};

log(sum(10,5));

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
log("A soma de " + 10 + " e " + 5 + " é igual a " + sum( 10, 5 ));

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/

log(sum.name);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName() {
  return showName.name;
}

// log(showName());

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
const varShowName = showName();

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
log(`A função ${varShowName} retorna ${showName()}.`);

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// function calculator(arg) {
//   return function( x, y ) {
//     let result;
//     let argu = arg;
//     if ( arg === '+' ){
//       result = x + y;
//       return `Resultado da operação: ${x} ${arg} ${y} = ${result}.`;
//     } if (arg === '-') {
//       result = x - y;
//       return `Resultado da operação: ${x} ${arg} ${y} = ${result}.`;
//     } if (arg === '*') {
//       result = x * y;
//       return `Resultado da operação: ${x} ${arg} ${y} = ${result}.`;
//     } if (arg === '/') {
//       result = x / y;
//       return `Resultado da operação: ${x} ${arg} ${y} = ${result}.`;
//     } if (arg === '%') {
//       result = x % y;
//       return `Resultado da operação: ${x} ${arg} ${y} = ${result}.`;
//     }else {
//       return `Operação inválida!`
//     }
//   }
// }

// Refatorando:
function calculator(arg) {
  return (arg === '+' || arg === '-' || arg === '*' || arg === '/' || arg === '%')
    ? (x, y) => `Resultado da operação: ${x} ${arg} ${y} = ${ eval(`${x} ${arg} ${y}`)}`
    : (x, y) => `Operação inválida!`;
}

// log(calculator('+')(20, 10));
// log(calculator('-')(20, 10));
// log(calculator('*')(20, 10));
// log(calculator('/')(20, 10));
// log(calculator('%')(20, 10));
// log(calculator('#')(20, 10));

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
const sumNumber = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
log(sumNumber(2,3));

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
const subtraction = calculator('-');
const multiplication = calculator('*');
const division = calculator('/');
const mod = calculator('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
log( subtraction( 30, 10 ));
log( multiplication( 30, 10));
log( division( 30, 10 ));
log( mod( 30, 10 ));

