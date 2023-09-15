import * as i0 from "@angular/core";
export declare class AESEncryptDecryptService {
    secretKey: string;
    constructor();
    encryptionAES(msg: any): string;
    decryptionAES(msg: any): string;
    encryptionAESLogin(msg: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AESEncryptDecryptService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AESEncryptDecryptService>;
}
