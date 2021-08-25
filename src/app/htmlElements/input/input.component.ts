import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IconDirective } from '../../icons/icon.directive';

@Component({
    selector: 'el-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],

})
export class InputComponent implements OnInit, AfterViewChecked {

    @Input() value: string = '';
    @Input() placeholder: string = '';
    @Input() label: string = '';
    @Input() type: string = ''; // search, calendar, clock, avatar
    @Input() modeSelect: boolean = false;

    @Input() isOpen: boolean = false;
    @Output() onClick: EventEmitter<boolean> = new EventEmitter();

    @Output() onInput: EventEmitter<string> = new EventEmitter();
    @ViewChild(IconDirective) icon: IconDirective;

    public isFocused: boolean = false;
    public isFilled: boolean = false;

    constructor() { }

    ngOnInit(): void {
        
    }

    ngAfterViewChecked() {
        // console.log('focused');
    }

    iconFocus(type: string): void {
        if (this.icon) {
            this.icon.activate(type === 'in');
        }
    }

    openSelect(): void {
        this.isOpen = !this.isOpen; 
        this.onClick.emit(this.isOpen);
    }
}
