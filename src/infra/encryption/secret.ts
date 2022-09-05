import crypto from 'crypto';

import { Encrypt } from "@/data/protocols/encryption";


export class Secret implements Encrypt{
  encrypt(data: string): string {
    return crypto.createHash('sha256').update(data).digest('hex');
  }
}
