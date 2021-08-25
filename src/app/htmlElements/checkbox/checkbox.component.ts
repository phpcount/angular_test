import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'el-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

    @Input() label: string = '';
    @Input('el-id') id: string;
    @Input() square: boolean = true;
    @Input() blueText: boolean = false; 

    @Input() set checked(val: boolean | string) {
        console.log('checked', val);
        let _val = (val === true || val === 'true') ? true : false;
        this._checked = _val;
    } get checked(): boolean | string {
        return this._checked;
    }
    _checked: boolean = false;

    @Input() set disabled(val: string) {
        this._disabled = (val === 'false' ? undefined : true);
    }
    _disabled: boolean | undefined = undefined;

    @Output() flowUpStatus: EventEmitter<string> = new EventEmitter();


    @HostBinding('attr.disabled') get disable() {
        return this._disabled;
    }

    ngOnInit(): void {
    }

    onChange(): void {
        this.checked = !this.checked;
        this.flowUpStatus.emit(this.id);
    }


}
