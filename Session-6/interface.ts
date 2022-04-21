interface Color{
    //interface can have methods declaraion as well as property
    color:string;
}
interface Length extends Color{
    length:number;
}
var shape= <Length>{};
shape.color="Red";
shape.length=10.10;

console.log("Color of my Shape is "+shape.color);
console.log("Length of my shape is "+shape.length);