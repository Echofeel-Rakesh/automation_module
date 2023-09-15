import { HttpClient } from "@angular/common/http";
import { UserModel } from './models/user-model.model';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AuthenticationService {
    private http;
    private router;
    constructor(http: HttpClient, router: Router);
    verifyModuleLogin(um: UserModel): boolean;
    logoutUser(): void;
    checkUserLoggedIn(): boolean;
    setReload(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthenticationService>;
}
