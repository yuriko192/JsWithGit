let fun = () => {
    console.log("function");
};

function ff() {
    console.log("function juga");
}

let dic = {
    name: "asd",
    age: 12,

    printname: () => {
        console.log(this.name);
    }
};

let x = 5;

for (i = 0; i < x; i++) {
    console.log(i);
}

console.log(dic.name);
dic.printname();
