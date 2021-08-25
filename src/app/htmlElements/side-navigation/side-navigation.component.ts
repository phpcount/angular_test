import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../breadcrumb/breadcrumb.types';

@Component({
    selector: 'el-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

    @Input() menuItems: MenuItem[];
    @Input() contentWrapperId: string = '';
    @Output() onClose: EventEmitter<void> = new EventEmitter();
    @ViewChild('menuSidebar') menuSidebar: ElementRef<HTMLDivElement>;

    constructor(private router: Router) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.menuSidebar.nativeElement.style.width = "250px";
            if (!!this.contentWrapperId) {
                document.getElementById(this.contentWrapperId).style.marginLeft = "250px";
            }
            document.getElementById(this.contentWrapperId).classList.add('overlay');
        });
    }

    goToLink(e: KeyboardEvent, url: string): void {
        this.closeNav(e);
        this.router.navigate([url]); 
    }

    closeNav(e: KeyboardEvent): void {
        e.preventDefault();

        this.menuSidebar.nativeElement.style.width = "0";
        if (!!this.contentWrapperId) {
            document.getElementById(this.contentWrapperId).style.marginLeft = "0";
        }

        document.getElementById(this.contentWrapperId).classList.remove('overlay');
        this.onClose.emit();
    }


}
