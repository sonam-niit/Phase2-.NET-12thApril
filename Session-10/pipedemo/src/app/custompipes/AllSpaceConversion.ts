import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convertToSpace'
})
export class AllSpaceConversion implements PipeTransform{

    transform(value: string, chnaracter:string) {

        return value.split(" ").join(chnaracter);
    }

}