class GenericMap<T extends number | string>
{
    private items: {[key:string]:T}={}

    setItem(key:string,item:T):void{
        this.items[key]=item;
    }
    getItem(key:string):T{
        return this.items[key];
    }
    printMap():string{

        const itemsAsstring= Object.getOwnPropertyNames(this.items)
        .map(key => `'${key}': ${this.getItem(key)}`)
        .join(", ");
        return itemsAsstring;
    }
}

const numMap= new GenericMap<number>();
numMap.setItem('alpha',6);
numMap.setItem('beta',8);
console.log(numMap.printMap());

const stringMap= new GenericMap<string>();
stringMap.setItem('color','red');
stringMap.setItem('height','3.56');
console.log(stringMap.printMap())
