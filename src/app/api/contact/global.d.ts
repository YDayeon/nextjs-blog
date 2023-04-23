import { Request as OriginalNextRequest } from 'next/server';

declare global {
  declare interface Request extends OriginalNextRequest {
    body: {
      email: string;
      subject: string;
      message: string;
    };
  }
}
