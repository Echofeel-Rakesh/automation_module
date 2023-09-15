import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
export class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    verifyModuleLogin(um) {
        if (um.username == "admin" && um.password == "admin") {
            sessionStorage.setItem('currentUser', um.username);
            return true;
        }
        else {
            return false;
        }
        // this.http.get(CommonGlobalVar.BASE_API_URL + "login/login?username="+um.username+"&pass=" + um.password + "&ipaddress=" + um.ipaddress).subscribe(
        //   data => {
        //     let res:any = data; 
        //     console.log(res);
        //   },
        //   err => {
        //     console.log(err);
        //   },() => {
        //   }
        // );;
        // console.log(um.username);
    }
    logoutUser() {
        //window.location.reload();
        sessionStorage.clear();
        this.router.navigate(["/logged-out"]);
    }
    checkUserLoggedIn() {
        if (sessionStorage.getItem('currentUser') != null) {
            return true;
        }
        return false;
    }
    setReload() {
        if (!localStorage.getItem('reload')) {
            localStorage.setItem('reload', 'no reload');
            location.reload();
        }
        else {
            localStorage.removeItem('reload');
        }
    }
}
AuthenticationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AuthenticationService, deps: [{ token: i1.HttpClient }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AuthenticationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AuthenticationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2JkLWNvbW1vbi1saWIvc3JjL2xpYi9jb21tb24vYXV0aGVudGljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBVTNDLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFBb0IsSUFBZ0IsRUFBUyxNQUFjO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUVoRSxpQkFBaUIsQ0FBQyxFQUFjO1FBRTlCLElBQUcsRUFBRSxDQUFDLFFBQVEsSUFBSSxPQUFPLElBQUksRUFBRSxDQUFDLFFBQVEsSUFBSSxPQUFPLEVBQ25EO1lBQ0UsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFFRDtZQUNFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxxSkFBcUo7UUFDckosY0FBYztRQUNkLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsT0FBTztRQUNQLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsY0FBYztRQUNkLE1BQU07UUFDTixNQUFNO1FBRU4sNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxVQUFVO1FBRVIsMkJBQTJCO1FBQzNCLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGlCQUFpQjtRQUVmLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDakQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFNBQVM7UUFFUCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQTtZQUMzQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDbEI7YUFBTTtZQUNMLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDbEM7SUFDSCxDQUFDOztrSEFwRFUscUJBQXFCO3NIQUFyQixxQkFBcUIsY0FIcEIsTUFBTTsyRkFHUCxxQkFBcUI7a0JBSmpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IENvbW1vbkdsb2JhbFZhciB9IGZyb20gJy4vY29tbW9uLWdsb2JhbCc7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3VzZXItbW9kZWwubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICB2ZXJpZnlNb2R1bGVMb2dpbih1bSA6IFVzZXJNb2RlbClcclxuICB7XHJcbiAgICBpZih1bS51c2VybmFtZSA9PSBcImFkbWluXCIgJiYgdW0ucGFzc3dvcmQgPT0gXCJhZG1pblwiKVxyXG4gICAge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIHVtLnVzZXJuYW1lKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuaHR0cC5nZXQoQ29tbW9uR2xvYmFsVmFyLkJBU0VfQVBJX1VSTCArIFwibG9naW4vbG9naW4/dXNlcm5hbWU9XCIrdW0udXNlcm5hbWUrXCImcGFzcz1cIiArIHVtLnBhc3N3b3JkICsgXCImaXBhZGRyZXNzPVwiICsgdW0uaXBhZGRyZXNzKS5zdWJzY3JpYmUoXHJcbiAgICAvLyAgIGRhdGEgPT4ge1xyXG4gICAgLy8gICAgIGxldCByZXM6YW55ID0gZGF0YTsgXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgZXJyID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgLy8gICB9LCgpID0+IHtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gKTs7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKHVtLnVzZXJuYW1lKTtcclxuICB9XHJcblxyXG4gIGxvZ291dFVzZXIoKVxyXG4gIHtcclxuICAgIC8vd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dnZWQtb3V0XCJdKTtcclxuICB9XHJcblxyXG4gIGNoZWNrVXNlckxvZ2dlZEluKClcclxuICB7XHJcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSAhPSBudWxsKSB7ICAgICAgXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVsb2FkKClcclxuICB7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWxvYWQnKSkgeyBcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbG9hZCcsICdubyByZWxvYWQnKSBcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCkgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVsb2FkJykgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=