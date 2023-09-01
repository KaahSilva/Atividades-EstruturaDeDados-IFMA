//cada número é a soma dos dois números anteriores

function fibonacci(valor){
    let soma=0 // 2 3 5 8 13 21
    let anterior=1 // 1 2 3 5 8
    let proximo= 1 // 2 3 5 8 13 

    for (let i=0; i<valor; i++){
        console.log(proximo)//começa com 1
        soma=anterior+proximo // 1
        anterior=proximo //1
        proximo=soma //2
    }
    
}

fibonacci(10)

















// function fibonacci(valor){
//     let proximo = 0;
//     let anterior =1;

//     for (i=0; i<valor; i++){
//         console.log(proximo);
//         let soma = proximo+anterior; //2
//         anterior= proximo// 1
//         proximo=soma;//2
        
//     }
// }

// fibonacci(10)