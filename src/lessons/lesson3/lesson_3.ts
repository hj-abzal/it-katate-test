console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

///
///
console.log('start');
let loader = false;
const prom =  new Promise((resolve, reject) => {
    loader = true;
    //back request get date

    setTimeout(() => {
        let respond = {
            data: {
                day: '06'
            },
            status: 200,
            errorMessage:  "I don't know!"
        };
        if (respond.status === 200) resolve(respond.data.day)
        else reject(respond.errorMessage)

    }, 3000);
})
console.log(prom);
prom
    .then((resolve) => {
        console.log(`Today is ${resolve} day`);
    })
    .catch((errorMessage) => {
        console.log('Error', errorMessage)
    })
    .finally(() => {
        loader = false;
        console.log('stop');
    })

console.log('end');
// just a plug
export default () => {
};
