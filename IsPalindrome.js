//Teste para o processo seletivo daa DeepESG

//Função que testa se string é um palindromo, utilize qualquer frase, inclusive com pontos de exclamação, interrogação, etc...

const IsPalindrome = (RawString) => {
    //Remove todos os espaços e transforma a string para letras minúsculas e remove tudo que não for letra ou número.
    let String = RawString.replace(/\s+|[^0-9a-z]/gi, '').toLowerCase();
    //Variável com tamanho da palavra ou frase
    let StringLength = String.length;
    //Módulo para poder posteriormente saber se frase ou palavra é ímpar ou par
    let StringModule = StringLength % 2;
    
    switch (StringModule) {
        case 0: //Palavra de tamanho par
            for (let i = 0; i < StringLength/2 - 1; i++) {
                if (String[i] != String[StringLength - 1 - i]) {
                    return console.log("The string is NOT a palindrome!")
                }
            }    
            return console.log("The string IS a palindrome!!")
            break;
        case 1: //Palavra de tamanho ímpar
            for (let i = 0; i < StringLength/2; i++) {
                if (String[i] != String[StringLength - 1 - i]) {
                    return console.log("The string is NOT a palindrome!")
                }
            }    
            return console.log("The string IS a palindrome!!")
            break;
        default:
            console.log("Sorry Something Went Wrong :/")
    }
}