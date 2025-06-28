import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";


const auth = getAuth();


export async function loginWithEmail(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    window.location.href = 'index.html';
  } catch (error) {
    alert(`Login failed: ${error.message}`);
  }
}


export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    window.location.href = 'index.html';
  } catch (error) {
    alert(`Google sign-in failed: ${error.message}`);
  }
}


export async function registerWithEmail(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    window.location.href = 'login.html';
  } catch (error) {
    alert(`Registration failed: ${error.message}`);
  }
}


export async function logout() {
  try {
    await signOut(auth);
    window.location.href = 'login.html'; 
  } catch (error) {
    alert(`Logout failed: ${error.message}`);
  }
}


export function monitorAuthState(onUserChanged) {
  onAuthStateChanged(auth, (user) => {
    onUserChanged(user); 
  });
}