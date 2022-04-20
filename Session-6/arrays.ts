const nums : number[] = [10,20,30,40,50,60,70];

console.log(nums);
console.log(nums[2]);

for(let i of nums){
    console.log(i);
}
//desrtuctring arrays and object
const myArray:number[]=[2,34,56,78];
const [num1,num2,num3,num4] = myArray;
console.log(num1,num2,num3,num4);

const data=[{name:"alex",age:34},{name:"bob",age:67}];
const[user1,user2]=data
console.log(user1.name+" "+user1.age);
console.log(user2.name+" "+user2.age);