const _ = require('lodash');

const object = {a:1 , b:{
    c : 2 , 
    d : [2,3],
    e : new Date() , 
    f : function() {
        console.log("Hello world");
    }
}};

const clonedObject = _.cloneDeep(object);

clonedObject.b.d.push(5);

console.log(clonedObject);
console.log(object);