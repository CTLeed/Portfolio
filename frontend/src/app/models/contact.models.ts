export interface ContactForm {
  id?: number;
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}