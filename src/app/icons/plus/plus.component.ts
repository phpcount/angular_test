import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'icon-plus',
    templateUrl: './plus.component.svg',
    styleUrls: ['./plus.component.scss']
})
export class PlusComponent implements OnInit {

    @Input() set big(val: boolean) {
        this._big = val;
    }
    _big: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

}
