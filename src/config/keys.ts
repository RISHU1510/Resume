export const APP_CONFIG = {
  // Destination address for Contact form transmissions
  contactEmail: (import.meta.env.VITE_CONTACT_EMAIL as string) || 'rishusingh627h@gmail.com',

  // Optional Web3Forms API key (defaults to direct auto-forwarder if blank)
  web3FormsKey: (import.meta.env.VITE_WEB3FORMS_KEY as string) || '',

  // Optional Supabase connection for basketball club
  supabase: {
    url: (import.meta.env.VITE_SUPABASE_URL as string) || '',
    anonKey: (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || '',
  },
};
