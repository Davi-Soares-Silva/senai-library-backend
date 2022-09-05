import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { SECRET } from '@/utils/constants';

export function imageUploadAdapter(fieldNames: string[]) {
    const fileDestination = path.join(__dirname, '..', '..', '..', 'uploads')
    const generateFilename = (extension: string) => {

        const md5Hasher = crypto.createHmac('md5', SECRET.FILENAME_HASH_SECRET);

        const now = new Date().getTime();

        const encryptedFilename = md5Hasher.update(now.toString()).digest("hex");

        return `${encryptedFilename}.${extension}`;
    } 

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, fileDestination)
          },
          filename: function (req, file, cb) {            
            const [_, extension] = file.originalname.split('.');

            cb(null, generateFilename(extension))
          }
    });

    const upload = multer({ dest: 'uploads/', storage });

    const fieldsToUpload = fieldNames.map((field) => {
        return {
            name: field,
            maxCount: 1, 
        }
    })

    return upload.fields(fieldsToUpload);
}