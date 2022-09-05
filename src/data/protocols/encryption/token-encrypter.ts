export interface TokenEncrypter {
    encrypt(plaintext: string | number): Promise<string>;
  }