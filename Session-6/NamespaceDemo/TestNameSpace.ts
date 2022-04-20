///<reference path="Validation.ts"/>
///<reference path="ZipCodeValidator.ts"/>
///<reference path="LettersOnlyValidator.ts"/>
var strings=["Helllo","62432423","101"];

//validators which we will use
var validators:{[s:string]:Validation.StringValidator}={};
validators["Zip Code"]= new Validation.ZipCodeValidator();
validators["Letters"]= new Validation.LettersOnlyVlidator();

//match wether each string passed with Validators or not

for(let s of strings){
    for(let name in validators){
        console.log(
            `"${s}" - ${validators[name].isAcceptable(s)?"matches":"does not matche"} ${name}`
        )
    }
}