# Desafio da semana #4

```js
const { log } = console;

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
const isTruthy = ( parametro ) => !!parametro;

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
log(
    isTruthy( false ),
    isTruthy( null ),
    isTruthy( undefined ),
    isTruthy( '' ),
    isTruthy( 0 ),
    isTruthy( -0 ),
    isTruthy( NaN )
); // Dessa forma retorna tudo na mesma linha

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
log(  isTruthy( 'lalala' ));
log( isTruthy( 1 ));
log( isTruthy( {} ));
log( isTruthy( [] ));
log( isTruthy( function() {} ));
log( isTruthy( 'la lala lalala' ));
log( isTruthy( 30 * 40 ));
log( isTruthy( 10 + 2 ));
log( isTruthy( [ 1, 2, 3, 9, 8 ] ));
log( isTruthy( { fruta:'banana', quantidade: 10 } ) ); // Dessa forma retorna em linhas separadas

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

const carro = {
    marca: 'Fiat',
    modelo: 'Uno Turbo com escada',
    placa: 'zzz-9999',
    ano: 1994,
    cor: 'Branco',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,
  }

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = ( newColor ) => carro.cor = newColor;

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => carro.cor;

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => carro.modelo;

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => carro.marca;

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => `Esse carro é um ${ carro.marca } ${ carro.modelo }!`;

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = ( numPessoas ) => {
    let totalPessoas = carro.quantidadePessoas + numPessoas;
    let quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    let pluralOuSingular = ( arg ) => ( arg  === 1 ) ? "pessoa" : "pessoas";
	let cabe = ( param ) => ( param === 1 ) ? "cabe" : "cabem";

    if( carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos ) {
        return 'O carro já está lotado';
    }

    if( totalPessoas > carro.assentos ) {
        return `Só ${ cabe( quantasPessoasCabem ) } mais ${ quantasPessoasCabem } ${ pluralOuSingular( quantasPessoasCabem ) }!`;
    }

    carro.quantidadePessoas += numPessoas;
    return `Já temos ${ carro.quantidadePessoas } ${ pluralOuSingular( carro.quantidadePessoas ) } no carro`;
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.
Qual a cor atual do carro?
*/
log( carro.cor ) // Branco

// Mude a cor do carro para vermelho.
log( carro.mudarCor( 'Vermelho' ) ); // Vermelho

// E agora, qual a cor do carro?
log( carro.cor ) // Vermelho

// Mude a cor do carro para verde musgo.
log( carro.mudarCor( 'Verde Musgo' ) ); // Verde Musgo

// E agora, qual a cor do carro?
log( carro.cor ); // Verde Musgo

// Qual a marca e modelo do carro?
log( carro.obterMarcaModelo() ); // Esse carro é um Fiat Uno Turbo com escada!

// Adicione 2 pessoas no carro.
log( carro.addPessoas( 2 ) ); // "Já temos 2 pessoas no carro."

// Adicione mais 4 pessoas no carro.
log( carro.addPessoas( 4 ) ); // "Só cabem mais 3 pessoas!"

// Faça o carro encher.
log( carro.addPessoas( 3 ) ); // "Já temos 5 pessoas no carro."

// Tire 4 pessoas do carro.
log( carro.addPessoas( -4 ) ); // "Já temos 1 pessoa no carro."

// Adicione 10 pessoas no carro.
log( carro.addPessoas( 10 ) ); // "Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
log( carro.quantidadePessoas ) // 1
```
