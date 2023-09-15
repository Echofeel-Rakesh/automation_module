import { Injectable } from '@angular/core';
import * as CryptoTS from 'crypto-ts';
import * as i0 from "@angular/core";
export class AESEncryptDecryptService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWVzZW5jcnlwdC1kZWNyeXB0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9iZC1jb21tb24tbGliL3NyYy9saWIvY29tbW9uL2Flc2VuY3J5cHQtZGVjcnlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7O0FBTXRDLE1BQU0sT0FBTyx3QkFBd0I7SUFHbkM7UUFEQSxjQUFTLEdBQUcsa0NBQWtDLENBQUE7SUFDOUIsQ0FBQztJQUVqQixhQUFhLENBQUUsR0FBTztRQUNwQixVQUFVO1FBQ1YsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsYUFBYSxDQUFFLEdBQU87UUFDcEIsVUFBVTtRQUNWLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsTUFBTSxLQUFLLEdBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELGtCQUFrQixDQUFFLEdBQU87UUFDekIsVUFBVTtRQUNWLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxRCxPQUFPLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDOztxSEF2QlUsd0JBQXdCO3lIQUF4Qix3QkFBd0IsY0FIdkIsTUFBTTsyRkFHUCx3QkFBd0I7a0JBSnBDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ3J5cHRvVFMgZnJvbSAnY3J5cHRvLXRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBRVNFbmNyeXB0RGVjcnlwdFNlcnZpY2Uge1xuXG4gIHNlY3JldEtleSA9ICd6ISEhISEhITFzZGZhZHNmNTZhZGY0NTZhc2RmYXNkZidcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBlbmNyeXB0aW9uQUVTIChtc2c6YW55KSB7XG4gICAgLy8gRW5jcnlwdFxuICAgIGNvbnN0IGNpcGhlcnRleHQgPSBDcnlwdG9UUy5BRVMuZW5jcnlwdChtc2csIHRoaXMuc2VjcmV0S2V5KTtcbiAgICByZXR1cm4gYnRvYShjaXBoZXJ0ZXh0LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgZGVjcnlwdGlvbkFFUyAobXNnOmFueSkge1xuICAgIC8vIERlY3J5cHRcbiAgICBtc2cgPSBhdG9iKG1zZyk7XG4gICAgY29uc3QgYnl0ZXMgID0gQ3J5cHRvVFMuQUVTLmRlY3J5cHQobXNnLCB0aGlzLnNlY3JldEtleSk7XG4gICAgY29uc3QgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvVFMuZW5jLlV0ZjgpO1xuICAgIHJldHVybiBwbGFpbnRleHQ7XG4gIH1cblxuICBlbmNyeXB0aW9uQUVTTG9naW4gKG1zZzphbnkpIHtcbiAgICAvLyBFbmNyeXB0XG4gICAgY29uc3QgY2lwaGVydGV4dCA9IENyeXB0b1RTLkFFUy5lbmNyeXB0KG1zZywgJ1JlbsOpIMOcYmVyJyk7XG4gICAgcmV0dXJuIGNpcGhlcnRleHQudG9TdHJpbmcoKTtcbiAgfVxuXG59XG4iXX0=