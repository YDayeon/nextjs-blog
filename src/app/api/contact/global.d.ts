import { TContactForm } from '@/components/ContactForm';
import { Request as OriginalNextRequest } from 'next/server';

declare global {
  declare interface Request extends OriginalNextRequest {
    body: TContactForm;
  }
}
