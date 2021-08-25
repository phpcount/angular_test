import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from '../../htmlElements/breadcrumb/breadcrumb.types';
import { NavRoutes, ContentPageId } from '../pages-enums';
import { MediaService } from '../../services/media.service';

@Component({
    selector: 'page-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss', './custom-material.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit {

    public navRoutes: MenuItem[] = NavRoutes;
    public breadcrumbsMenuItems: MenuItem[] = [];
    public currentRoute: MenuItem = NavRoutes[0];
    public contentWrapperId: string = ContentPageId;
    public isOpenSideNavigation: boolean = false;
    public isOpenNewModal: boolean = false;
    private mediaService = new MediaService('(min-width: 576px)');

    isDesktop: boolean;
    
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.mediaService.match$.subscribe(value => {
            this.isDesktop = value;
        });
    }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbsMenuItems = this.createBreadcrumbs(this.activatedRoute.root);
                this.currentRoute = this.getCurrentRoute(this.breadcrumbsMenuItems);
            }
        }, (e) => {
            console.error(e);
        });
    }

    openOrCloseNav(e?: KeyboardEvent): void {
        e && e.preventDefault();
        this.isOpenSideNavigation = !this.isOpenSideNavigation;
    }

    openOrCloseNewPlan(e?: KeyboardEvent): void {
        e && e.preventDefault();
        this.isOpenNewModal = !this.isOpenNewModal;

    }

    private getCurrentRoute(breadcrumbsMenuItems: MenuItem[]): MenuItem | null {
        let currentRoute = NavRoutes[0];
        if (Array.isArray(breadcrumbsMenuItems)) {
            currentRoute = breadcrumbsMenuItems[breadcrumbsMenuItems.length - 1];
        }

        return currentRoute;
    }

    private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
        const children: ActivatedRoute[] = route.children;
    
        if (children.length === 0) {
          return breadcrumbs;
        }
    
        for (const child of children) {
          const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
          if (routeURL !== '') {
            url += `/${routeURL}`;
          }

          const label = child.snapshot.data.breadcrumb;
          if (!!label) {
            breadcrumbs.push({label, url});
          }
    
          return this.createBreadcrumbs(child, url, breadcrumbs);
        }
    }

}
