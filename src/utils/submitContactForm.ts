import { FormData } from '../types';

const FORM_ENDPOINT = process.env.REACT_APP_FORM_ENDPOINT;

export class FormNotConfiguredError extends Error {
  constructor() {
    super('FORM_NOT_CONFIGURED');
    this.name = 'FormNotConfiguredError';
  }
}

export class FormSubmitError extends Error {
  constructor() {
    super('SUBMIT_FAILED');
    this.name = 'FormSubmitError';
  }
}

export async function submitContactForm(data: FormData): Promise<void> {
  if (!FORM_ENDPOINT) {
    throw new FormNotConfiguredError();
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: data.name.trim(),
      position: data.position?.trim() ?? '',
      company: data.company?.trim() ?? '',
      email: data.email.trim(),
      phone: data.phone.trim(),
    }),
  });

  if (!response.ok) {
    throw new FormSubmitError();
  }
}
