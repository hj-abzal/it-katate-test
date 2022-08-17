console.log('lesson 2');
//function/class/loops/ if/else / switch/ try/catch / anon code

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0
//    f: 'Function',
//     c: 2,
//     f2: 'Function',
//     b: 1
// let globalScope = {
//     outerScope: null,
//     f1: 'Function',
//     a: 1,
//     f2: 'Function',
//     f3: 'Function'
// };
//
// let a = 1;
//
// function f1() {
//     let innerScopef1_ = {
//         outerScope: globalScope,
//         b: 3 // 0 => 1 => 2 => 3
//     }
//     let innerScopef1 = {
//         outerScope: globalScope,
//         b: 1 // 0 => 1
//     }
//     let b = 0;
//     console.log(b);
//    return () => {
//        let innerScopef2 = {
//            outerScope: innerScopef1,
//        }
//        b += a;
//        console.log(b);
//    }
// }
//
//
// const f2 = f1();
//
// f2();
// f2();
//
// const f3 = f1();
// f3()
//
// f2();


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (n1: number) => {

    return (n2: number) => {

        return n1 + n2;
    }
}


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:

// let globalScope = {
//     outerScope: null,
//     makeCounter: "Function",
//     counter: "Function",
//     counter2: "Function"
// };


// const makeCounter = () => {
//     let counter = 0;
//     return () => {
//         counter = counter +1
//         console.log(counter);
//         return counter
//     }
// }
//
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

//Recursion

// const sumTo = (n: number) => {
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         res += n - i;
//     }
//     return res
// }

// const sumTo = (n: number, acc: number): number => {
//     if (n === 1) return n;
//     acc += n - 1
//     return n + sumTo(n - 1, acc)
// }
// console.log(sumTo(3, 0));
// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
const superSum = (n: number) => {
    if (n === 0 ) return n;
    if (n === 1) return (num: number) => num;

    let arr: number[] = [];
    const helper = (...num: number[]) => {
        arr = [...arr, ...num]
        if (arr.length >= n) {
            arr.length = n;
            return arr.reduce((a, b) => a + b)
        }
        return helper
    }
    return helper
}
//@ts-ignore
console.log(superSum(0)); //0
//@ts-ignore
console.log(superSum(3)(2)(5)(3)); //10
//@ts-ignore
console.log(superSum(3)(2)(5, 3)); //10
//@ts-ignore
console.log(superSum(3)(2, 5, 3)); //10
//@ts-ignore
console.log(superSum(3)(2, 5)(3)); //10
//@ts-ignore
console.log(superSum(3)(2, 5)(3, 9)); //10

// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};