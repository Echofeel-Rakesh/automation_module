import { ToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
export declare class NotificationAlertService {
    private toastr;
    constructor(toastr: ToastrService);
    showSuccess(message: string, positionClass: string): void;
    showError(message: string, positionClass: string): void;
    showInfo(message: string, positionClass: string): void;
    showWarning(message: string, positionClass: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationAlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationAlertService>;
}
