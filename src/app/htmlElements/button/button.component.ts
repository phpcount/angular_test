import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IconDirective } from 'src/app/icons/icon.directive';

@Component({
    selector: 'el-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit {

    @Input() label: string = '';
    @Input() type: string = '';
    @Input() color: string = 'dark';
    @Input() big: boolean = false;
    @ViewChild(IconDirective) icon: IconDirective;

    constructor() { }

    ngOnInit(): void {
       
    }

    ngAfterViewInit(): void {
        this.icon && this.icon.setColorFill(this.color);
    }

}
