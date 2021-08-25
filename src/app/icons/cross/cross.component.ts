import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'icon-cross',
    templateUrl: './cross.component.svg',
    styleUrls: ['../icons.style.scss', './cross.component.scss']
})
export class CrossComponent implements OnInit {

    @Input() set big(val: boolean) {
        this._big = true;
    }
    _big: boolean = false;
    
    constructor() { }

    ngOnInit(): void {
    }

}
