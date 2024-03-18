import CryptoJS from 'crypto-js';

const secretKey = 'your-secret-key'; // Use a secure method to manage this key

export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptData = (encryptedData: any) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
