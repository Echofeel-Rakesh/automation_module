import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class NotificationAlertService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, positionClass) {
        this.toastr.success(message, '', {
            positionClass: positionClass
        });
    }
    showError(message, positionClass) {
        this.toastr.error(message, '', {
            positionClass: positionClass
        });
        ;
    }
    showInfo(message, positionClass) {
        this.toastr.info(message, '', {
            positionClass: positionClass
        });
    }
    showWarning(message, positionClass) {
        this.toastr.warning(message, '', {
            positionClass: positionClass
        });
    }
}
NotificationAlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: NotificationAlertService, deps: [{ token: i1.ToastrService }], target: i0.ɵɵFactoryTarget.Injectable });
NotificationAlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: NotificationAlertService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: NotificationAlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ToastrService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWFsZXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9iZC1jb21tb24tbGliL3NyYy9saWIvY29tbW9uL25vdGlmaWNhdGlvbi1hbGVydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8zQyxNQUFNLE9BQU8sd0JBQXdCO0lBRW5DLFlBQW9CLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBSSxDQUFDO0lBRTdDLFdBQVcsQ0FBQyxPQUFjLEVBQUUsYUFBb0I7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQztZQUM3QixhQUFhLEVBQUUsYUFBYTtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQWMsRUFBRSxhQUFvQjtRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsRUFBRSxFQUFDO1lBQzNCLGFBQWEsRUFBRSxhQUFhO1NBQzdCLENBQUMsQ0FBQztRQUFNLENBQUM7SUFDWixDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQWMsRUFBRSxhQUFvQjtRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBRSxFQUFDO1lBQzFCLGFBQWEsRUFBRSxhQUFhO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBYyxFQUFFLGFBQW9CO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUM7WUFDN0IsYUFBYSxFQUFFLGFBQWE7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7cUhBMUJVLHdCQUF3Qjt5SEFBeEIsd0JBQXdCLGNBSHZCLE1BQU07MkZBR1Asd0JBQXdCO2tCQUpwQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkFsZXJ0U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9hc3RyOlRvYXN0clNlcnZpY2UpIHsgfVxyXG5cclxuICBzaG93U3VjY2VzcyhtZXNzYWdlOnN0cmluZywgcG9zaXRpb25DbGFzczpzdHJpbmcpe1xyXG4gICAgdGhpcy50b2FzdHIuc3VjY2VzcyhtZXNzYWdlLCcnLHtcclxuICAgICAgcG9zaXRpb25DbGFzczogcG9zaXRpb25DbGFzcyBcclxuICAgIH0pOyAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgc2hvd0Vycm9yKG1lc3NhZ2U6c3RyaW5nLCBwb3NpdGlvbkNsYXNzOnN0cmluZyl7XHJcbiAgICB0aGlzLnRvYXN0ci5lcnJvcihtZXNzYWdlLCcnLHtcclxuICAgICAgcG9zaXRpb25DbGFzczogcG9zaXRpb25DbGFzcyBcclxuICAgIH0pOyAgICAgIDsgICAgICBcclxuICB9XHJcblxyXG4gIHNob3dJbmZvKG1lc3NhZ2U6c3RyaW5nLCBwb3NpdGlvbkNsYXNzOnN0cmluZyl7XHJcbiAgICB0aGlzLnRvYXN0ci5pbmZvKG1lc3NhZ2UsJycse1xyXG4gICAgICBwb3NpdGlvbkNsYXNzOiBwb3NpdGlvbkNsYXNzIFxyXG4gICAgfSk7ICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBzaG93V2FybmluZyhtZXNzYWdlOnN0cmluZywgcG9zaXRpb25DbGFzczpzdHJpbmcpe1xyXG4gICAgdGhpcy50b2FzdHIud2FybmluZyhtZXNzYWdlLCcnLHtcclxuICAgICAgcG9zaXRpb25DbGFzczogcG9zaXRpb25DbGFzcyBcclxuICAgIH0pOyAgICAgIFxyXG4gIH1cclxuICBcclxufVxyXG4iXX0=