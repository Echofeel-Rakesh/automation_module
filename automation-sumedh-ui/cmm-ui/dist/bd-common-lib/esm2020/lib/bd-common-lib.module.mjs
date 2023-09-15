import { NgModule } from '@angular/core';
import { BDCommonLibComponent } from './bd-common-lib.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BdHeaderComponent } from './layout/bd-header/bd-header.component';
import { BdFooterComponent } from './layout/bd-footer/bd-footer.component';
import { BdNavComponent } from './layout/bd-nav/bd-nav.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class BDCommonLibModule {
}
BDCommonLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BDCommonLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibModule, declarations: [BDCommonLibComponent,
        BdHeaderComponent,
        BdFooterComponent,
        BdNavComponent], imports: [i1.ToastrModule, BrowserAnimationsModule], exports: [BDCommonLibComponent,
        BdHeaderComponent,
        BdFooterComponent,
        BdNavComponent] });
BDCommonLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibModule, imports: [ToastrModule.forRoot(),
        BrowserAnimationsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BDCommonLibComponent,
                        BdHeaderComponent,
                        BdFooterComponent,
                        BdNavComponent
                    ],
                    imports: [
                        ToastrModule.forRoot(),
                        BrowserAnimationsModule
                    ],
                    exports: [
                        BDCommonLibComponent,
                        BdHeaderComponent,
                        BdFooterComponent,
                        BdNavComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmQtY29tbW9uLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9iZC1jb21tb24tbGliL3NyYy9saWIvYmQtY29tbW9uLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7O0FBcUJsRSxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBaEIxQixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixjQUFjLDhCQUlkLHVCQUF1QixhQUd2QixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixjQUFjOytHQUdMLGlCQUFpQixZQVYxQixZQUFZLENBQUMsT0FBTyxFQUFFO1FBQ3RCLHVCQUF1QjsyRkFTZCxpQkFBaUI7a0JBbEI3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZLENBQUMsT0FBTyxFQUFFO3dCQUN0Qix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixjQUFjO3FCQUNmO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkRDb21tb25MaWJDb21wb25lbnQgfSBmcm9tICcuL2JkLWNvbW1vbi1saWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RyTW9kdWxlIH0gZnJvbSAnbmd4LXRvYXN0cic7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQmRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9iZC1oZWFkZXIvYmQtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJkRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvYmQtZm9vdGVyL2JkLWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCZE5hdkNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2JkLW5hdi9iZC1uYXYuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQkRDb21tb25MaWJDb21wb25lbnQsXHJcbiAgICBCZEhlYWRlckNvbXBvbmVudCxcclxuICAgIEJkRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQmROYXZDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFRvYXN0ck1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQkRDb21tb25MaWJDb21wb25lbnQsXHJcbiAgICBCZEhlYWRlckNvbXBvbmVudCxcclxuICAgIEJkRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQmROYXZDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCRENvbW1vbkxpYk1vZHVsZSB7IH1cclxuIl19