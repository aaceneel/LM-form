
import { useCallback } from 'react';
import { FormData } from '@/types/formTypes';
import { validateName, validatePhone } from '@/utils/formValidation';

export const useFormValidation = () => {
  // Validate current step
  const validateStep = useCallback((
    step: number,
    formData: FormData
  ): Partial<Record<keyof FormData, string>> => {
    const errors: Partial<Record<keyof FormData, string>> = {};
    
    if (step === 1) {
      if (!formData.fullName) {
        errors.fullName = 'Full name is required';
      } else if (!validateName(formData.fullName)) {
        errors.fullName = 'Name must contain only letters, with at least 2 characters per name part';
      }
      
      if (!formData.age) errors.age = 'Age is required';
      if (!formData.country) errors.country = 'Country is required';
      
      if (!formData.whatsapp) {
        errors.whatsapp = 'WhatsApp number is required';
      } else if (!validatePhone(formData.whatsapp)) {
        errors.whatsapp = 'Please enter a valid WhatsApp number with country code (e.g., +1 123 456 7890)';
      }
      
      if (!formData.instagram) {
        errors.instagram = 'Instagram ID is required';
      }
    } else if (step === 2) {
      if (!formData.contentTopic) errors.contentTopic = 'Please describe what you create content about';
      if (!formData.proudLink) errors.proudLink = 'Please provide a link to your proudest content';
      
      // Validate URL format for proud link
      if (formData.proudLink && !isValidUrl(formData.proudLink)) {
        errors.proudLink = 'Please enter a valid URL';
      }
    } else if (step === 3) {
      if (!formData.followerCount) errors.followerCount = 'Please select your follower count';
    }
    
    return errors;
  }, []);

  return { validateStep };
};

// Helper function to validate URL
const isValidUrl = (urlString: string): boolean => {
  try {
    new URL(urlString);
    return true;
  } catch (e) {
    return false;
  }
};

export default useFormValidation;
