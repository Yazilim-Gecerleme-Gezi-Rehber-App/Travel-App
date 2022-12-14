export default function(errorCode){
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Geçersiz E-Posta Adresi!';

        case 'auth/email-already-exists':
            return 'Kullanıcı Zaten Kayıtlı!';

        case 'auth/user-not-found':
            return 'Kullanıcı Bulunamadı!';
    
        case 'auth/weak-password':
            return 'Parolanız Zayıf!';
        
        case 'auth/wrong-password':
            return 'Hatalı Şifre Girişi';

        default:
            return errorCode;
    };
};