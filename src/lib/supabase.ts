import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { APP_CONFIG } from '../config/keys';

const supabaseUrl = APP_CONFIG.supabase.url;
const supabaseAnonKey = APP_CONFIG.supabase.anonKey;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('your-project') &&
  !supabaseAnonKey.includes('your-anon-key')
);

// Create actual client if configured, otherwise null
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ClubMember {
  id: string;
  username: string;
  email: string;
  fullName: string;
  phone?: string;
  preferredPosition?: string;
  registeredAt: string;
  status: 'Active Player' | 'Court Member' | 'Pickup Captain';
}

const LOCAL_STORAGE_USERS_KEY = 'sector106_basketball_members';
const LOCAL_STORAGE_SESSION_KEY = 'sector106_basketball_session';

/**
 * Register a new player for the Sector 106 Basketball Club.
 * Works seamlessly with Supabase Auth when credentials are provided,
 * or with persistent local storage fallback.
 */
export async function clubSignUp(payload: {
  username: string;
  password: string;
  fullName: string;
  email?: string;
  phone?: string;
  preferredPosition?: string;
}): Promise<{ success: boolean; member?: ClubMember; message?: string }> {
  const email = payload.email || `${payload.username.toLowerCase().replace(/[^a-z0-9]/g, '')}@basketball106.club`;

  // If Supabase is connected
  if (supabase) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: payload.password,
        options: {
          data: {
            username: payload.username,
            full_name: payload.fullName,
            phone: payload.phone || '',
            preferred_position: payload.preferredPosition || 'Guard',
          },
        },
      });

      if (error) {
        return { success: false, message: error.message };
      }

      const member: ClubMember = {
        id: data.user?.id || `user_${Date.now()}`,
        username: payload.username,
        email,
        fullName: payload.fullName,
        phone: payload.phone,
        preferredPosition: payload.preferredPosition || 'Point Guard',
        registeredAt: new Date().toISOString(),
        status: 'Active Player',
      };

      localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(member));
      return { success: true, member };
    } catch (err: any) {
      return { success: false, message: err?.message || 'Supabase authentication failed.' };
    }
  }

  // Local persistent storage fallback
  try {
    const existingRaw = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
    const existingUsers: Array<ClubMember & { passwordHash: string }> = existingRaw ? JSON.parse(existingRaw) : [];

    const usernameExists = existingUsers.some(
      (u) => u.username.toLowerCase() === payload.username.toLowerCase()
    );
    if (usernameExists) {
      return { success: false, message: 'Username is already registered. Please choose another or sign in.' };
    }

    const newMember: ClubMember = {
      id: `court_mem_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      username: payload.username,
      email,
      fullName: payload.fullName || payload.username,
      phone: payload.phone || '+91 9800000000',
      preferredPosition: payload.preferredPosition || 'Point Guard / Shooting Guard',
      registeredAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      status: 'Active Player',
    };

    existingUsers.push({
      ...newMember,
      passwordHash: payload.password, // Local fallback state
    });

    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(existingUsers));
    localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(newMember));

    return { success: true, member: newMember };
  } catch (e: any) {
    return { success: false, message: e?.message || 'Registration error occurred.' };
  }
}

/**
 * Sign in existing member
 */
export async function clubSignIn(payload: {
  usernameOrEmail: string;
  password: string;
}): Promise<{ success: boolean; member?: ClubMember; message?: string }> {
  // If Supabase is connected
  if (supabase) {
    try {
      const isEmail = payload.usernameOrEmail.includes('@');
      const email = isEmail
        ? payload.usernameOrEmail
        : `${payload.usernameOrEmail.toLowerCase().replace(/[^a-z0-9]/g, '')}@basketball106.club`;

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: payload.password,
      });

      if (error) {
        return { success: false, message: error.message };
      }

      const member: ClubMember = {
        id: data.user?.id || `user_${Date.now()}`,
        username: data.user?.user_metadata?.username || payload.usernameOrEmail,
        email: data.user?.email || email,
        fullName: data.user?.user_metadata?.full_name || payload.usernameOrEmail,
        phone: data.user?.user_metadata?.phone,
        preferredPosition: data.user?.user_metadata?.preferred_position || 'Guard',
        registeredAt: new Date().toISOString(),
        status: 'Active Player',
      };

      localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(member));
      return { success: true, member };
    } catch (err: any) {
      return { success: false, message: err?.message || 'Sign in failed.' };
    }
  }

  // Local storage fallback
  try {
    const existingRaw = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
    const existingUsers: Array<ClubMember & { passwordHash: string }> = existingRaw ? JSON.parse(existingRaw) : [];

    const matched = existingUsers.find(
      (u) =>
        (u.username.toLowerCase() === payload.usernameOrEmail.toLowerCase() ||
          u.email.toLowerCase() === payload.usernameOrEmail.toLowerCase()) &&
        u.passwordHash === payload.password
    );

    if (!matched) {
      return {
        success: false,
        message: 'Invalid username or password. Please check your credentials or register.',
      };
    }

    const { passwordHash, ...safeMember } = matched;
    localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(safeMember));

    return { success: true, member: safeMember };
  } catch (e: any) {
    return { success: false, message: e?.message || 'Authentication error.' };
  }
}

/**
 * Sign out member
 */
export async function clubSignOut(): Promise<void> {
  if (supabase) {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.warn('Supabase sign out error:', err);
    }
  }
  localStorage.removeItem(LOCAL_STORAGE_SESSION_KEY);
}

/**
 * Get active session member
 */
export function getActiveClubSession(): ClubMember | null {
  try {
    const sessionRaw = localStorage.getItem(LOCAL_STORAGE_SESSION_KEY);
    if (!sessionRaw) return null;
    return JSON.parse(sessionRaw);
  } catch {
    return null;
  }
}
