import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'el-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

    @Input() label: string;
    @Input('el-id') id: string;
    @Input() checked: boolean | string;
    @Input() group: string;
    @Output() flowUpStatus: EventEmitter<string> = new EventEmitter();

    @Input() set disabled(val: string) {
        this._disabled = (val === 'false' ? undefined : true);
    }
    _disabled: boolean | undefined = undefined;
    
    @HostBinding('attr.disabled') get disable() {
        return this._disabled;
    }

    ngOnInit(): void {
    }

    onChange(): void {
        this.flowUpStatus.emit(this.id);
    }

}
