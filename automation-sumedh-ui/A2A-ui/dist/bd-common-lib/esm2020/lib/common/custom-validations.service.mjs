import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CustomValidationsService {
    alphaNumericValidator() {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const regex = new RegExp('^[A-Z|a-z|0-9]+$');
            const valid = regex.test(control.value);
            return valid ? null : { invalidInput: true };
        };
    }
}
CustomValidationsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: CustomValidationsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustomValidationsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: CustomValidationsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: CustomValidationsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZhbGlkYXRpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9iZC1jb21tb24tbGliL3NyYy9saWIvY29tbW9uL2N1c3RvbS12YWxpZGF0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTNDLE1BQU0sT0FBTyx3QkFBd0I7SUFFbkMscUJBQXFCO1FBQ25CLE9BQU8sQ0FBQyxPQUF3QixFQUFpQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUM7SUFDSixDQUFDOztxSEFYVSx3QkFBd0I7eUhBQXhCLHdCQUF3QixjQUh2QixNQUFNOzJGQUdQLHdCQUF3QjtrQkFKcEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0aW9uc1NlcnZpY2Uge1xyXG5cclxuICBhbHBoYU51bWVyaWNWYWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7ICAgICAgXHJcbiAgICAgIGlmICghY29udHJvbC52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXltBLVp8YS16fDAtOV0rJCcpO1xyXG4gICAgICBjb25zdCB2YWxpZCA9IHJlZ2V4LnRlc3QoY29udHJvbC52YWx1ZSk7XHJcbiAgICAgIHJldHVybiB2YWxpZCA/IG51bGwgOiB7IGludmFsaWRJbnB1dDogdHJ1ZSB9OyAgICAgIFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcbiJdfQ==