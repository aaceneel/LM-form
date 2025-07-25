
// Form data interface
export interface FormData {
  fullName: string;
  age: string;
  country: string;
  whatsapp: string;
  instagram: string;
  contentTopic: string;
  proudLink: string;
  followerCount: string;
}

// Initial form data
export const initialFormData: FormData = {
  fullName: '',
  age: '',
  country: '',
  whatsapp: '',
  instagram: '',
  contentTopic: '',
  proudLink: '',
  followerCount: '',
};
