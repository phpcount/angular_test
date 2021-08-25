import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'menu-table-row',
    templateUrl: './menu-table-row.component.html',
    styleUrls: ['./menu-table-row.component.scss']
})
export class MenuTableRowComponent implements OnInit {

    @Input() rowId: string | number;
    @Output() onRemove: EventEmitter<string | number> = new EventEmitter();
    
    constructor() { }

    ngOnInit(): void {
    }

    removeRow(): void {
        this.onRemove.emit(this.rowId);
    }

}
