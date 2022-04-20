let array:number[]=[1,2,3,2,4,5,2,6,8,2];

class Count{

    count = ()=> console.log(array.filter(x=>x==2).length);
}

class Sum extends Count{
    sum=()=>{
        let total=0,i=0;
        for(let i of array)
            total+=array[i]; //total = total +array[i]

        console.log(total);
    }
}

let obj= new Sum();
obj.sum();
obj.count();//child object can access methods of parent class