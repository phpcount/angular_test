import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
    selector: 'select-filter',
    templateUrl: './select-filter.component.html',
    styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent implements OnInit {

    @Input() label: string = "";
    @Input() color: string = "blue";
    @Input() menuGroups: ItemListGroup;
    @Output() onChangeValue: EventEmitter<ItemListGroup> = new EventEmitter();

    @ViewChild(CdkConnectedOverlay) cdkConnectedOverlay: CdkConnectedOverlay;
    isOpenSelect: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    changeVisibility(e: KeyboardEvent, group_index: string, item_index: number): void {
        e.stopPropagation();
        this.menuGroups[group_index].list[item_index].show = !this.menuGroups[group_index].list[item_index].show;
        this.onChangeValue.emit(this.menuGroups);
    }

}
