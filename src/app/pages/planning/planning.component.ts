import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MediaService } from '../../services/media.service';

export interface PlanningElement {
    id: string;
    date: string | number;
    name: string;
    members: number;
    trainer: string;
    progress: number;
    disabled?: boolean;
}

const ELEMENT_DATA: PlanningElement[] = [
    { id: "122", date: '2021-12-23T09:00', name: 'Страхование с заботой о клиенте', members: 12, trainer: '', progress: 0.95 },
    { id: "123", date: '2021-11-14T09:30', name: 'Главные правила продаж', members: 10, trainer: '', progress: 0.91 },
    { id: "124", date: '2021-10-19T14:30', name: 'Первичное обучение КС', members: 8, trainer: '', progress: 0.86 },
    { id: "125", date: '2021-10-10T16:00', name: 'Вторичное обучение КС', members: 18, trainer: '', progress: 0.82 },
    { id: "126", date: '2021-10-05T15:00', name: 'Вклады: теория и практика', members: 6, trainer: '', progress: 0.79, disabled: true },
    { id: "127", date: '2021-09-27T11:00', name: 'Очное обучение менеджеров', members: 20, trainer: '', progress: 0.73, disabled: true },
];

const MENU_GROUPS: ItemListGroup[] = [
    {
        group_name: 'Системные поля',
        list: [
            { id: 'date', label: 'Дата начала', show: true },
            { id: 'name', label: 'Название', show: true },
            { id: 'members', label: 'Участников', show: true },
            { id: 'trainer', label: 'Тренер', show: true },
            { id: 'progress', label: 'Прогресс', show: true }
        ]
    }
];



@Component({
    selector: 'planning',
    templateUrl: './planning.component.html',
    styleUrls: ['./planning.component.scss']
})

export class PlanningComponent implements OnInit, AfterViewInit {
    @ViewChild(MatSort) sort: MatSort;


    displayedColumns: string[];

    planningElements: PlanningElement[] = [...ELEMENT_DATA];
    menuGroups: ItemListGroup[] = JSON.parse(JSON.stringify(MENU_GROUPS));
    dataSource = new MatTableDataSource(this.planningElements);
    programmsSelect: ItemList[] = [
        { id: 'prog-1', label: 'Программа1' },
        { id: 'prog-2', label: 'Программа2' },
        { id: 'prog-3', label: 'Программа3' }
    ];

    periodsSelect: ItemList[] = [
        { id: 'jun-2021', label: 'Июнь 2021' },
        { id: 'jul-2021', label: 'Июль 2021' },
        { id: 'aug-2021', label: 'Август 2021' }
    ];
    
    statusesSelect: ItemList[] = [
        { id: 'sts-1', label: 'Активный' },
        { id: 'sts-2', label: 'Отменен' },
        { id: 'sts-3', label: 'Завершен' }
    ];
    
    sortSelect: ItemList[] = [
        { id: 'sort-progress', label: 'По прогрессу обучения' },
        { id: 'sort-date-begin', label: 'По дате начала' },
        { id: 'sort- name', label: 'По названию' }
    ];
    
    private mediaService = new MediaService('(min-width: 576px)');

    isDesktop: boolean;
    
    constructor() { }

    ngOnInit(): void {
        this.settingFilter(this.menuGroups);
        this.mediaService.match$.subscribe(value => {
            this.isDesktop = value;
            console.log('mediaService.match$');
            if (!this.isDesktop) {
                this.displayedColumns = this.displayedColumns.filter((el: string) => el !== 'id' && el !== 'trainer' );
            }
        });
    }

    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }

    removeRow(id: string): void {
        this.dataSource.data = this.planningElements = this.planningElements.filter((el: PlanningElement) => el.id !== id);
    }

    settingFilter(menuGroups: ItemListGroup[]): void {
        this.displayedColumns = menuGroups[0].list
                                                .filter((el: ItemList) => !!el.show)
                                                .map((el: ItemList) => el.id)
                                                .concat(['id']);
    }

    resetFilter(): void {
        this.menuGroups = JSON.parse(JSON.stringify(MENU_GROUPS));
        this.settingFilter(this.menuGroups);
    }

}
