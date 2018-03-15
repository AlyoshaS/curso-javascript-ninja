# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
const biz = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
const { log } = console;

const pessoa = {
        nome: 'Tiburcina',
        sobrenome: 'Florencia',
        sexo: 'Feminino',
        idade: 29,
        altura: 1.74,
        peso: 79,
        andando: false,
        caminhouQuantosMetros: 0,
    }

/* Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = () => pessoa.idade++;

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = ( arg ) => ( pessoa.caminhouQuantosMetros += arg ) && ( pessoa.andando = true );

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = () => pessoa.andando = false;

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
// pessoa.nomeCompleto: () => 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome + "!",

pessoa.nomeCompleto = () => `Olá! Meu nome é ${ pessoa.nome } ${ pessoa.sobrenome }!`;

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = () => `Olá, eu tenho ${ pessoa.idade } anos!`;

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = () => `Eu peso ${ pessoa.peso }Kg.`;

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = () => `Minha altura é ${ pessoa.altura }m.`;

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
log(pessoa.nomeCompleto()); // Olá! Meu nome é Tiburcina Florencia!

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
log(pessoa.idade); // 29

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
log(pessoa.peso); // 79

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
log(pessoa.altura); // 1.74

/*
Faça a `pessoa` fazer 3 aniversários.
*/
log(pessoa.fazerAniversario()); // 29
log(pessoa.fazerAniversario()); // 30
log(pessoa.fazerAniversario()); // 31

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
log(pessoa.idade); // 32

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(2);
pessoa.andar(3);
pessoa.andar(4);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
log(pessoa.andando); // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
log(pessoa.parar()); // false

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
log(pessoa.andando); // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
log(pessoa.caminhouQuantosMetros); //9

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já
caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = () => (
    genero = ( pessoa.sexo === 'Feminino' ) ? 'a' : 'o',
    substantivoIdade = ( pessoa.idade === 1 ) ? "ano" : 'anos',
    substantivoMetro = ( pessoa.caminhouQuantosMetros === 1 ) ? "metro" : 'metros' ) &&

    `Olá, eu sou ${ genero } ${ pessoa.nome } ${ pessoa.sobrenome }, tenho ${ pessoa.idade } ${ substantivoIdade },meu peso é ${ pessoa.peso } e, só hoje, eu já caminhei ${ pessoa.caminhouQuantosMetros } ${ substantivoMetro }!`;

// Agora, apresente-se ;)
log(pessoa.apresentacao());
// Olá, eu sou a Tiburcina Florencia, tenho 29 anos, meu peso é 79 e, só hoje, eu já caminhei 9 metros!
// PS: Para a idade aparecer 29 anos, comentar as linhas 109, 110 e 111, para não chamar a função fazer aniversário (:
```
