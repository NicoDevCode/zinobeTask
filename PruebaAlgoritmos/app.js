
/*const palabra = 'Lineru';
let palabra_return = '';
let i = 0;
let pos = 0;
while (palabra.length !== palabra_return.length) {
    i += 1;
    pos = palabra.length - i;
    palabra_return += palabra[pos];
}
console.log(palabra_return);*/


/*const vector = [2, 25, 70, 2, 3, 4, 7];
var i = 0;
var temp = 0;
while (vector.length !== i) {
    i += 1;
    for (let j = 0; j < vector.length; j++) {
        if (vector[j] > vector[j + 1]) {
            temp = vector[j];
            vector[j] = vector[j + 1];
            vector[j + 1] = temp;
        }
    }
}
console.log(vector);*/


/*const Array = [
    {
        name: 'Homero Simpson',
        age: 53,
        profession: 'nuclear energy operator'
    },
    {
        name: 'Moe Szyslak',
        age: 57,
        profession: 'barman'
    },
    {
        name: 'Montgomery Burns',
        age: 86,
        profession: 'nuclear energy boss'
    },
    {
        name: 'Apu Nahasapeemapetilon',
        age: 45,
        profession: 'owner operator'
    },
];


Array.sort((a, b) => {
    return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
});

console.log(Array);*/


/*const toUpperCase = (argumento) => {
    let result = '';
    for (let i = 0; i <argumento.length; i++){
        let peso = argumento.charCodeAt(i);
        if (peso > 96 && peso < 123) {
            peso -= 32;
        }

        result += String.fromCharCode(peso);
    }
    return result;
};

console.log(toUpperCase('fintech'));*/


/*const piedra = {
    name: 'piedra',
    lose_with: 'papel'
};

const papel = {
    name: 'papel',
    lose_with: 'tijera'
};

const tijera = {
    name: 'tijera',
    lose_with: 'piedra'
};

const options = {
    1: piedra,
    2: papel,
    3: tijera
};

let opt = '';

let run = () => {
    while (true) {
        let user_option = parseInt(prompt('choice any option \n1] piedra , 2] Papel , 3] Tijera, 4] exit'));
        if (user_option >= 1 && user_option <= 3) {
            console.log('do stuff');
            const machine_value = Math.floor(Math.random() * ((3 + 1) - 1) + 1);
            const machine_option = options[machine_value];
            const user_choice = options[user_option];

            if (machine_option === user_choice) {
                opt += 'empate';
            } else {
                if (user_choice.name === machine_option.lose_with) {
                    opt += 'user win !';
                }
                if (machine_option.name === user_choice.lose_with) {
                    opt += 'machine win !';
                }
            }

            opt += `\nmachine : ${machine_option.name} - user : ${user_choice.name}`;
            alert(opt);
            opt = '';

        } else {
            console.log('choice valid option');
            break;
        }

        if (user_option === 4) {
            console.log('bye ;)');
            break;
        }
    }
};

run();*/

/*
let tabla = 1;
let count = 0;
for (let i = 1; i <= 100; i++) {
    count += 1;
    let mult = tabla  * count;
    console.log(tabla, 'x', count, '=', mult);
    if (i % 10 === 0){
        console.log('/////Tabla del', tabla, '//////');
        tabla += 1;
        count = 0;
    }
}
*/

/*let funtion = (facotorial) => {
    let result = 0;
    if (facotorial === 0){
        result = 1;
    }   else  {
        result = funtion(facotorial - 1 )* facotorial;
    }
    return result;

};
console.log(funtion(43));*/

