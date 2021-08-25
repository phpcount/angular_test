import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'el-select',
    templateUrl: './select.component.html',
    styleUrls: ['../select-filter/select-filter.component.scss', './select.component.scss']
})
export class SelectComponent implements OnInit {

    @Input() itemList: ItemList[];
    @Input() currentItem: ItemList;
    @Input() label: string = '';
    @Output() onChangeValue: EventEmitter<ItemList> = new EventEmitter();
    @ViewChild(CdkConnectedOverlay) cdkConnectedOverlay: CdkConnectedOverlay;

    isOpenSelect: boolean = false;
    activeSelect: ItemList;

    constructor() { }

    ngOnInit(): void {
    }

    selectItem(item: ItemList): void {
        this.currentItem = item;
        this.isOpenSelect = false;
        this.onChangeValue.emit(this.currentItem);
    }

}
