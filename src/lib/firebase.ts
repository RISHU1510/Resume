import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
  deleteDoc,
  updateDoc,
  getDocFromServer,
  Firestore,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App singleton
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Initialize Firestore (support named database if configured)
export const db: Firestore = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

// Connection verification as mandated by skill guidelines
export async function testFirestoreConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log('[Firebase] Firestore connection test passed');
    return true;
  } catch (error: any) {
    if (error?.message?.includes('the client is offline')) {
      console.warn('[Firebase] Client is offline. Verify network connection and Firebase configuration.');
      return false;
    }
    // Expected if test document does not exist yet; connection reached the server
    return true;
  }
}

// Immediately run the non-blocking connection test
testFirestoreConnection();

/**
 * Sign in using Google OAuth Popup
 */
export async function signInWithGoogle(): Promise<FirebaseUser> {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  // Persist user record in Firestore
  if (user) {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(
      userRef,
      {
        id: user.uid,
        email: user.email || '',
        displayName: user.displayName || 'Portfolio Guest',
        photoURL: user.photoURL || '',
        lastLogin: new Date().toISOString(),
      },
      { merge: true }
    );
  }

  return user;
}

/**
 * Sign out current authenticated user
 */
export async function logOut(): Promise<void> {
  await signOut(auth);
}

/**
 * Bookmark/Save project to user's favorites
 */
export async function toggleProjectBookmark(userId: string, projectId: string): Promise<boolean> {
  const bookmarkRef = doc(db, 'users', userId, 'bookmarks', projectId);
  const snap = await getDoc(bookmarkRef);
  if (snap.exists()) {
    await deleteDoc(bookmarkRef);
    return false; // Removed
  } else {
    await setDoc(bookmarkRef, {
      id: projectId,
      userId,
      projectId,
      createdAt: new Date().toISOString(),
    });
    return true; // Added
  }
}

/**
 * Fetch user's bookmarked project IDs
 */
export async function fetchUserBookmarks(userId: string): Promise<string[]> {
  try {
    const bookmarksRef = collection(db, 'users', userId, 'bookmarks');
    const snapshot = await getDocs(query(bookmarksRef));
    const projectIds: string[] = [];
    snapshot.forEach((docSnap) => {
      projectIds.push(docSnap.id);
    });
    return projectIds;
  } catch (err) {
    console.error('[Firebase] Failed to fetch user bookmarks:', err);
    return [];
  }
}

export { onAuthStateChanged };
export type { FirebaseUser };
