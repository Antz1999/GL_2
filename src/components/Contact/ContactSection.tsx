import React from 'react';
import { PageTitle } from '../common/PageTitle';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <div className="p-8">
      <PageTitle 
        title="Get in Touch"
        subtitle="connect with us"
      />
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}