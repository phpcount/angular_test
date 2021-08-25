import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './breadcrumb.types';

@Component({
    selector: 'el-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    @Input() set menuItems(items: MenuItem[]) {
        this._menuItems = items;
    };
    _menuItems: MenuItem[];

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goToLink(e: KeyboardEvent, url: string): void {
        e.preventDefault();
        this.router.navigate([url]); 
    }

}
