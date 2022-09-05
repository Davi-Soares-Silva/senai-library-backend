export interface TokenDecrypter {
    decrypt(ciphertext: string): Promise<any>;
  }
  