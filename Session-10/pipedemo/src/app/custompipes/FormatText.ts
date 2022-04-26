import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'changespace'
})
export class FormatText implements PipeTransform{

    transform(value: string, data:string) {

        return value.replace(' ',data);
    }

}