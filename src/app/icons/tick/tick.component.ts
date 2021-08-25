import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'icon-tick',
    templateUrl: './tick.component.html',
    styleUrls: ['./tick.component.scss']
})
export class TickComponent implements OnInit {

    @Input() set big(val: boolean) {
        this._big = true;
    }
    _big: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

}
