import { Directive, ElementRef } from '@angular/core';
 
@Directive({
    selector: '[icon]'
})

export class IconDirective {
     
    constructor(private elementRef: ElementRef<HTMLElement>) {
    }

    activate(isActive: boolean): void {
        let tokenList: DOMTokenList = this.elementRef.nativeElement.classList;
        isActive ? tokenList.add('focused') : tokenList.remove('focused');
    }

    setColorFill(color: string): void {
        let tokenList: DOMTokenList = this.elementRef.nativeElement.classList;
        tokenList.contains(color) ? tokenList.remove(color) : tokenList.add(color);
    }
}
