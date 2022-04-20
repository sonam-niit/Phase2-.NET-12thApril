class GetSetDemo{

    private _fname:string; //use prefix before the variable name
    private _lname:string;

    get fname():string{
        return this._fname;
    }
    get lname():string{
        return this._lname;
    }
    set fname(fname:string){
        this._fname=fname;
    }
    set lname(lname:string){
        this._lname=lname;
    }
}

let getset =new GetSetDemo();
getset.fname="Sonam";
getset.lname="soni"; //calling set method
console.log(getset.fname+" "+getset.lname) //calling get method