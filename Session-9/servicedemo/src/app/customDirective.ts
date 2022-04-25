import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector:'[colorChange]'
})
export class ColorChangeDirective{

    constructor(ele:ElementRef,render:Renderer2){
        render.setStyle(ele.nativeElement,'color','magenta');
    }
}