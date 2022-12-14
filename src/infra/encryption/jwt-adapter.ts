import { TokenEncrypter, TokenDecrypter  } from '@/data/protocols/encryption';

import jwt from 'jsonwebtoken';

export class JwtAdapter implements TokenEncrypter, TokenDecrypter{
  constructor(private readonly secret: string) {}

  async encrypt(plaintext: string): Promise<string> {
    return jwt.sign({ id: plaintext }, this.secret);
  }

  async decrypt(ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}