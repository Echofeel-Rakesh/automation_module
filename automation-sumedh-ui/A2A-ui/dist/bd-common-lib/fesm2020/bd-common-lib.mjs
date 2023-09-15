import * as i0 from '@angular/core';
import { Injectable, Component, Inject, NgModule } from '@angular/core';
import * as i1$1 from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i4 from '@angular/common';
import { DOCUMENT } from '@angular/common';
import * as i1 from '@angular/common/http';
import * as i2 from '@angular/router';
import * as CryptoTS from 'crypto-ts';

class BDCommonLibService {
    constructor() { }
}
BDCommonLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BDCommonLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class BDCommonLibComponent {
}
BDCommonLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BDCommonLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: BDCommonLibComponent, selector: "lib-BD-Common-Lib", ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-BD-Common-Lib', template: `` }]
        }] });

class CommonGlobalVar {
}
CommonGlobalVar.BASE_API_URL = '';
//USER_UI = 'http://172.18.62.63:7084/' //Linux TEST
CommonGlobalVar.USER_UI = 'https://entportaluat-bluedart.dhl.com'; //DHL TEST  
CommonGlobalVar.USER_UI_DEV = 'https://entportaldev-bluedart.dhl.com'; //DHL DEV   
CommonGlobalVar.USER_UI_UAT = 'https://entportaluat-bluedart.dhl.com'; //DHL UAT
CommonGlobalVar.USER_UI_PROD = 'https://entportal-bluedart.dhl.com'; //DHL PRODUCTION
;

class AuthenticationService {
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

class AESEncryptDecryptService {
    constructor() {
        this.secretKey = 'z!!!!!!!1sdfadsf56adf456asdfasdf';
    }
    encryptionAES(msg) {
        // Encrypt
        const ciphertext = CryptoTS.AES.encrypt(msg, this.secretKey);
        return btoa(ciphertext.toString());
    }
    decryptionAES(msg) {
        // Decrypt
        msg = atob(msg);
        const bytes = CryptoTS.AES.decrypt(msg, this.secretKey);
        const plaintext = bytes.toString(CryptoTS.enc.Utf8);
        return plaintext;
    }
    encryptionAESLogin(msg) {
        // Encrypt
        const ciphertext = CryptoTS.AES.encrypt(msg, 'René Über');
        return ciphertext.toString();
    }
}
AESEncryptDecryptService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AESEncryptDecryptService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AESEncryptDecryptService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AESEncryptDecryptService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: AESEncryptDecryptService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class BdHeaderComponent {
    constructor(document, authService, encrypt, router) {
        this.document = document;
        this.authService = authService;
        this.encrypt = encrypt;
        this.router = router;
        this.isUserLoggedIn = false;
        this.empName = '';
    }
    ngOnInit() {
        if (sessionStorage.getItem('empCode') !== null) {
            this.isUserLoggedIn = true;
            this.empName = this.encrypt.decryptionAES(sessionStorage.getItem('empName')?.toString());
        }
        //this.isUserLoggedIn = this.authService.checkUserLoggedIn();
    }
    //Toggle navigation button click event to show hide navigation menu
    togglebtnclick() {
        this.document.body.classList.toggle('toggle-sidebar');
    }
    //Logout user and close window
    doLogout() {
        //this.authService.logoutUser();
        // sessionStorage.clear();
        // localStorage.clear();     
        // window.location.href = (CommonGlobalVar.USER_UI);       
        // let popups:any[]=[];
        // popups = JSON.parse(localStorage.getItem('pp')!);
        // console.log(popups[1]);
        // for(let w = 0; popups.length > w; w++)
        // {
        //   console.log(popups[w]);
        //   window[popups[w]].close();
        // }
        console.log('window location : ', window.location.toString().toLowerCase());
        console.log('user ui : ', CommonGlobalVar.USER_UI.toLowerCase() + '/dashboard');
        if (window.location.toString().toLowerCase() == CommonGlobalVar.USER_UI.toLowerCase() + '/dashboard') {
            console.log('Inside closeWin()');
            closeWin();
            if (window.location.href.toLowerCase().includes('dev')) {
                window.location.href = (CommonGlobalVar.USER_UI_DEV);
            }
            else if (window.location.href.toLowerCase().includes('uat') || window.location.href.toLowerCase().includes('test')) {
                window.location.href = (CommonGlobalVar.USER_UI_UAT);
            }
            else {
                window.location.href = (CommonGlobalVar.USER_UI_PROD);
            }
        }
        else {
            sessionStorage.clear();
            localStorage.clear();
            window.self.close();
        }
        //console.log('logout');
        // window.self.close();
        // window.close();
    }
}
BdHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BdHeaderComponent, deps: [{ token: DOCUMENT }, { token: AuthenticationService }, { token: AESEncryptDecryptService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
BdHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: BdHeaderComponent, selector: "lib-bd-header", ngImport: i0, template: "<header id=\"header\" class=\"header fixed-top d-flex align-items-center\">\r\n    <div class=\"d-flex align-items-center justify-content-between\">\r\n        <span class=\"logo d-flex align-items-center\">\r\n            <a class=\"logo-link\" href=\"/dashboard\"><img src=\"assets/img/blue-dart_logo.jpeg\" alt=\"\"></a>\r\n        </span>\r\n        <i class=\"bi bi-list toggle-sidebar-btn\" (click)=\"togglebtnclick()\"  *ngIf=\"isUserLoggedIn==true\"></i>\r\n    </div><!-- End Logo -->\r\n    <nav class=\"header-nav ms-auto\"  *ngIf=\"isUserLoggedIn==true\">\r\n        <ul class=\"d-flex align-items-center\">\r\n            <li class=\"nav-item dropdown\">                \r\n            </li><!-- End Notification Nav -->\r\n            <li class=\"nav-item dropdown pe-3\">\r\n                <a class=\"nav-link nav-profile d-flex align-items-center pe-0\" href=\"#\" data-bs-toggle=\"dropdown\">\r\n                    <img src=\"assets/img/male.png\" alt=\"Profile\" class=\"rounded-circle\">\r\n                    <span class=\"d-none d-md-block dropdown-toggle ps-2\">{{this.empName}}</span>\r\n                </a><!-- End Profile Iamge Icon -->\r\n                <ul class=\"dropdown-menu dropdown-menu-end dropdown-menu-arrow profile\">\r\n                    <li class=\"dropdown-header\">\r\n                        <h6>{{this.empName}}</h6>\r\n                        <span></span>\r\n                    </li>\r\n                    <li>\r\n                        <hr class=\"dropdown-divider\">\r\n                    </li>\r\n                    <!-- <li>\r\n                        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                            <i class=\"bi bi-person\"></i>\r\n                            <span>My Profile</span>\r\n                        </a>\r\n                    </li> -->\r\n                    <!-- <li>\r\n                        <hr class=\"dropdown-divider\">\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                            <i class=\"bi bi-gear\"></i>\r\n                            <span>Account Settings</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <hr class=\"dropdown-divider\">\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                            <i class=\"bi bi-question-circle\"></i>\r\n                            <span>Need Help?</span>\r\n                        </a>\r\n                    </li> -->\r\n                    <li>\r\n                        <hr class=\"dropdown-divider\">\r\n                    </li>\r\n                    <li>\r\n                        <a id=\"Logout\" class=\"dropdown-item d-flex align-items-center cursor-pointer\" (click)=\"doLogout()\">\r\n                            <i class=\"bi bi-box-arrow-right\"></i>\r\n                            <span>Sign Out</span>\r\n                        </a>\r\n                    </li>\r\n                </ul><!-- End Profile Dropdown Items -->\r\n            </li><!-- End Profile Nav -->\r\n        </ul>\r\n    </nav><!-- End Icons Navigation -->\r\n</header><!-- End Header -->\r\n\r\n", styles: [""], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BdHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-bd-header', template: "<header id=\"header\" class=\"header fixed-top d-flex align-items-center\">\r\n    <div class=\"d-flex align-items-center justify-content-between\">\r\n        <span class=\"logo d-flex align-items-center\">\r\n            <a class=\"logo-link\" href=\"/dashboard\"><img src=\"assets/img/blue-dart_logo.jpeg\" alt=\"\"></a>\r\n        </span>\r\n        <i class=\"bi bi-list toggle-sidebar-btn\" (click)=\"togglebtnclick()\"  *ngIf=\"isUserLoggedIn==true\"></i>\r\n    </div><!-- End Logo -->\r\n    <nav class=\"header-nav ms-auto\"  *ngIf=\"isUserLoggedIn==true\">\r\n        <ul class=\"d-flex align-items-center\">\r\n            <li class=\"nav-item dropdown\">                \r\n            </li><!-- End Notification Nav -->\r\n            <li class=\"nav-item dropdown pe-3\">\r\n                <a class=\"nav-link nav-profile d-flex align-items-center pe-0\" href=\"#\" data-bs-toggle=\"dropdown\">\r\n                    <img src=\"assets/img/male.png\" alt=\"Profile\" class=\"rounded-circle\">\r\n                    <span class=\"d-none d-md-block dropdown-toggle ps-2\">{{this.empName}}</span>\r\n                </a><!-- End Profile Iamge Icon -->\r\n                <ul class=\"dropdown-menu dropdown-menu-end dropdown-menu-arrow profile\">\r\n                    <li class=\"dropdown-header\">\r\n                        <h6>{{this.empName}}</h6>\r\n                        <span></span>\r\n                    </li>\r\n                    <li>\r\n                        <hr class=\"dropdown-divider\">\r\n                    </li>\r\n                    <!-- <li>\r\n                        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                            <i class=\"bi bi-person\"></i>\r\n                            <span>My Profile</span>\r\n                        </a>\r\n                    </li> -->\r\n                    <!-- <li>\r\n                        <hr class=\"dropdown-divider\">\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                            <i class=\"bi bi-gear\"></i>\r\n                            <span>Account Settings</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <hr class=\"dropdown-divider\">\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                            <i class=\"bi bi-question-circle\"></i>\r\n                            <span>Need Help?</span>\r\n                        </a>\r\n                    </li> -->\r\n                    <li>\r\n                        <hr class=\"dropdown-divider\">\r\n                    </li>\r\n                    <li>\r\n                        <a id=\"Logout\" class=\"dropdown-item d-flex align-items-center cursor-pointer\" (click)=\"doLogout()\">\r\n                            <i class=\"bi bi-box-arrow-right\"></i>\r\n                            <span>Sign Out</span>\r\n                        </a>\r\n                    </li>\r\n                </ul><!-- End Profile Dropdown Items -->\r\n            </li><!-- End Profile Nav -->\r\n        </ul>\r\n    </nav><!-- End Icons Navigation -->\r\n</header><!-- End Header -->\r\n\r\n" }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: AuthenticationService }, { type: AESEncryptDecryptService }, { type: i2.Router }]; } });

class BdFooterComponent {
}
BdFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BdFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BdFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: BdFooterComponent, selector: "lib-bd-footer", ngImport: i0, template: "<footer id=\"footer\" class=\"footer d-none\">\r\n    <div class=\"copyright\">\r\n        &copy; Copyright <strong><span> Blue Dart Express Limited</span></strong>. All Rights Reserved\r\n    </div>\r\n</footer>\r\n\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BdFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-bd-footer', template: "<footer id=\"footer\" class=\"footer d-none\">\r\n    <div class=\"copyright\">\r\n        &copy; Copyright <strong><span> Blue Dart Express Limited</span></strong>. All Rights Reserved\r\n    </div>\r\n</footer>\r\n\r\n" }]
        }] });

class BdNavComponent {
}
BdNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BdNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BdNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: BdNavComponent, selector: "lib-bd-nav", ngImport: i0, template: "<aside id=\"sidebar\" class=\"sidebar\">\r\n    <ul class=\"sidebar-nav\" id=\"sidebar-nav\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"/home\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>A2A</span>\r\n            </a>\r\n        </li><!-- End A2A Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" routerLink=\"/home\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Alternate Customer Master</span>\r\n            </a>\r\n        </li><!-- End Alternate Customer Master Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" routerLink=\"/home\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>AltInst AwbListing</span>\r\n            </a>\r\n        </li><!-- End AltInst AwbListing Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" routerLink=\"/home\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>CAPX MODULE</span>\r\n            </a>\r\n        </li><!-- End CAPX MODULE Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"/sendsms\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Caress</span>\r\n            </a>\r\n        </li><!-- End Caress Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" routerLink=\"/cmm/ce\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>CMM</span>\r\n            </a>\r\n        </li><!-- End CMM Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"/fme\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Commercial</span>\r\n            </a>\r\n        </li><!-- End Commercial Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Control Tower</span>\r\n            </a>\r\n        </li><!-- End Control Tower Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Customer Centric</span>\r\n            </a>\r\n        </li><!-- End Customer Centric Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>GNMS</span>\r\n            </a>\r\n        </li><!-- End GNMS Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>MIS Scheduler</span>\r\n            </a>\r\n        </li><!-- End MIS Scheduler Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Network Module</span>\r\n            </a>\r\n        </li><!-- End Network Module Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Notification</span>\r\n            </a>\r\n        </li><!-- End Notification Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>NSL Module</span>\r\n            </a>\r\n        </li><!-- End NSL Module Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>PDA Billing System</span>\r\n            </a>\r\n        </li><!-- End PDA BILLING SYSTEM Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Stray Module</span>\r\n            </a>\r\n        </li><!-- End Stray Module Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>User Admin and Role Mgmt</span>\r\n            </a>\r\n        </li><!-- End User Admin and Role Mgmt Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>WDL</span>\r\n            </a>\r\n        </li><!-- End WDL Nav -->\r\n    </ul>\r\n</aside>\r\n\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BdNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-bd-nav', template: "<aside id=\"sidebar\" class=\"sidebar\">\r\n    <ul class=\"sidebar-nav\" id=\"sidebar-nav\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"/home\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>A2A</span>\r\n            </a>\r\n        </li><!-- End A2A Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" routerLink=\"/home\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Alternate Customer Master</span>\r\n            </a>\r\n        </li><!-- End Alternate Customer Master Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" routerLink=\"/home\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>AltInst AwbListing</span>\r\n            </a>\r\n        </li><!-- End AltInst AwbListing Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" routerLink=\"/home\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>CAPX MODULE</span>\r\n            </a>\r\n        </li><!-- End CAPX MODULE Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"/sendsms\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Caress</span>\r\n            </a>\r\n        </li><!-- End Caress Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" routerLink=\"/cmm/ce\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>CMM</span>\r\n            </a>\r\n        </li><!-- End CMM Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"/fme\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Commercial</span>\r\n            </a>\r\n        </li><!-- End Commercial Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Control Tower</span>\r\n            </a>\r\n        </li><!-- End Control Tower Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Customer Centric</span>\r\n            </a>\r\n        </li><!-- End Customer Centric Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>GNMS</span>\r\n            </a>\r\n        </li><!-- End GNMS Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>MIS Scheduler</span>\r\n            </a>\r\n        </li><!-- End MIS Scheduler Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Network Module</span>\r\n            </a>\r\n        </li><!-- End Network Module Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Notification</span>\r\n            </a>\r\n        </li><!-- End Notification Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>NSL Module</span>\r\n            </a>\r\n        </li><!-- End NSL Module Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>PDA Billing System</span>\r\n            </a>\r\n        </li><!-- End PDA BILLING SYSTEM Nav -->\r\n\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>Stray Module</span>\r\n            </a>\r\n        </li><!-- End Stray Module Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>User Admin and Role Mgmt</span>\r\n            </a>\r\n        </li><!-- End User Admin and Role Mgmt Nav -->\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link collapsed\" href=\"#\">\r\n                <i class=\"bi bi-caret-right\"></i>\r\n                <span>WDL</span>\r\n            </a>\r\n        </li><!-- End WDL Nav -->\r\n    </ul>\r\n</aside>\r\n\r\n" }]
        }] });

class BDCommonLibModule {
}
BDCommonLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BDCommonLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.3", ngImport: i0, type: BDCommonLibModule, declarations: [BDCommonLibComponent,
        BdHeaderComponent,
        BdFooterComponent,
        BdNavComponent], imports: [i1$1.ToastrModule, BrowserAnimationsModule], exports: [BDCommonLibComponent,
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

class NotificationAlertService {
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
NotificationAlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: NotificationAlertService, deps: [{ token: i1$1.ToastrService }], target: i0.ɵɵFactoryTarget.Injectable });
NotificationAlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: NotificationAlertService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: NotificationAlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ToastrService }]; } });

class CustomValidationsService {
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

/*
 * Public API Surface of bd-common-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AESEncryptDecryptService, AuthenticationService, BDCommonLibComponent, BDCommonLibModule, BDCommonLibService, BdFooterComponent, BdHeaderComponent, BdNavComponent, CommonGlobalVar, CustomValidationsService, NotificationAlertService };
//# sourceMappingURL=bd-common-lib.mjs.map
