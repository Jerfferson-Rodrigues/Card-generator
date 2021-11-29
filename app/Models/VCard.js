import QRCode from 'qrcode'
import { PassThrough } from 'stream';

class VCard{
    generateQRCodeBuffer(profileData, opts){
        let vcardText = this.generateVCardString(profileData)
        let writable = new PassThrough()
        QRCode.toFileStream(writable,vcardText, opts)
        return writable
    }
    generateVCardString(profileData){
        return `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:${profileData.first_name} ${profileData.last_name}
N;CHARSET=UTF-8:${profileData.last_name.split(" ")[0]};${profileData.first_name};;;
EMAIL;CHARSET=UTF-8;type=WORK,INTERNET:${profileData.email}
TEL;TYPE=WORK,VOICE:${profileData.cellphone}
ADR;CHARSET=UTF-8;TYPE=WORK:;;;${profileData.city};${profileData.state};;
TITLE;CHARSET=UTF-8:${profileData.title}
ORG;CHARSET=UTF-8:${profileData.company}
END:VCARD`

    }
}

export default VCard