let user = {
    name: "Tom",
    age: 24,
    account: {
        login: "tom555",
        password: "qwerty"
    },
    f1: function (job, phone) {
        console.log('Name is '+this.name);
        console.log('Age is '+this.age);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
    }
}
user.f1('Frontend',3805555555);

// let lena = Object.create(user)
// console.log(lena);
// // let lena1 = new user;
// // console.log(lena1);
// lena.name = 'Elena'
// console.log(lena);

// const lena = {
//     name: 'Elena',
//     age: 21
// }
// let f2 = user.f1.bind(lena)//  , 'HR', +3809966332211)
// user.f1.call(lena, 'HR', +3809966332211)
// user.f1.apply(lena, ['HR2', +3809966332222222])
// f2("HH", 3858585)

// const str='I am string'
// const str = new String('I am string')
// console.log(str.blink());

let array = [1, 2, 3, 4, 5]
let array2=[3,4,5]
// function multBy(arr, n) {
//     // return arr.map(elem => elem * n)
//     return arr.map(function(elem) {return elem * n;} )
// }
// console.log(multBy(array, 2));
Array.prototype.multBy = function (n) {
    console.log('Mult', this);
    return this.map(el=>el*n)
}
// console.log(array.multBy(3));
console.log(array2.multBy(3));
console.log(Array.prototype);
// console.log(Array.__proto__);
// console.log(window);
// console.log(window.Array);
// console.log(Array.isArray(array));

// function createIncrementor(n) {
//     return function (num) {
//         return num + n;
//     }
// }
// let addOne = createIncrementor(1)
// let addTen = createIncrementor(10)
// console.log(addOne(10));
// console.log(addTen(10));

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}
let comUrl = urlGenerator('com')
console.log(comUrl('google'));
console.log(comUrl('microsoft'));

// function test(a, b) {
//     return a+b
// }
// console.log({...test(), name:'Vasa'});

class Test {
    constructor(tekst, width, heigth, ) {
        this.tekst = tekst;
        this.width = width;
        this.heigth = heigth;
    }

    #test='Hahaha'
    set testProp(testProp) {
        this._testProp = testProp.trim().toLowerCase();
        console.log('Yooou' + test.testProp)
        console.log('Privat' + test.#test)
    }
    get testProp() {
        return this._testProp
    }
    one() {
        console.log("#tect  --- "+this.#test);
    }
}
const test = new Test;
test.testProp = '    WpaLLa '
const test2 = new Test('xsdfgs','110');
console.log(test.testProp = '   BBbb');
console.log(test2.testProp);
console.log(test);
console.log(test2);
test2.one()// test2.#test
// console.log(test.#test)
// console.log(test.testProp)

class Component{
    constructor(selector) {
        this.$el=document.querySelector(selector)
    }
    hide() {
        this.$el.style.display='none'
    }
    show() {
        this.$el.style.display='block'
    }
}
class Box extends Component{
    constructor(options) {
        super(options.selector)

       this.$el.style.height = this.$el.style.width =  options.size+'px';
        this.$el.style.background = options.color;
        // this.$el.style.display='block'
    }
}

const box1 = new Box({
    selector: '#box1',
    size: '125',
    color: "red"

})
class Circle extends Box{
    constructor(options) {
        super(options)
        this.$el.style.borderRadius='50%'
    }
}
const circle = new Circle({
    selector: '#circle',
    size: '100',
    color: "pink"
})
circle.hide()
circle.show()