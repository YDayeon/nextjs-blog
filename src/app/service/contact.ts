import { TContactForm } from '@/components/ContactForm';

export async function sendContactForm(params: TContactForm) {
  const response = await fetch('/api/contact', {
    method: 'post',
    body: JSON.stringify(params),
  });
  console.log(response);
  const result = await response.json();
  return result;
}
