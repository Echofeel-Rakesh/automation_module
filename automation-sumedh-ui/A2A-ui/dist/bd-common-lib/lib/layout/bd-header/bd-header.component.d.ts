import { OnInit } from '@angular/core';
import { AuthenticationService } from '../../common/authentication.service';
import { AESEncryptDecryptService } from '../../common/aesencrypt-decrypt.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class BdHeaderComponent implements OnInit {
    private document;
    private authService;
    private encrypt;
    private router;
    isUserLoggedIn: boolean;
    empName: string;
    constructor(document: Document, authService: AuthenticationService, encrypt: AESEncryptDecryptService, router: Router);
    ngOnInit(): void;
    togglebtnclick(): void;
    doLogout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BdHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BdHeaderComponent, "lib-bd-header", never, {}, {}, never, never, false, never>;
}
