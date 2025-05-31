import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// تهيئة Firebase Auth
const auth = getAuth();

// تسجيل الدخول بالبريد وكلمة السر
export async function loginWithEmail(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // بعد نجاح تسجيل الدخول، يتم التحويل لصفحة الرئيسية
    window.location.href = 'index.html';
  } catch (error) {
    alert(`Login failed: ${error.message}`);
  }
}

// تسجيل الدخول بجوجل
export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    window.location.href = 'index.html';
  } catch (error) {
    alert(`Google sign-in failed: ${error.message}`);
  }
}

// تسجيل مستخدم جديد
export async function registerWithEmail(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // بعد التسجيل يتم تحويل المستخدم إلى صفحة تسجيل الدخول
    window.location.href = 'login.html';
  } catch (error) {
    alert(`Registration failed: ${error.message}`);
  }
}

// تسجيل الخروج
export async function logout() {
  try {
    await signOut(auth);
    window.location.href = 'login.html'; // تحويل المستخدم إلى صفحة تسجيل الدخول بعد الخروج
  } catch (error) {
    alert(`Logout failed: ${error.message}`);
  }
}

// دالة لمراقبة حالة تسجيل الدخول (مثلاً لتحديث الواجهة عند تسجيل الدخول أو الخروج)
export function monitorAuthState(onUserChanged) {
  onAuthStateChanged(auth, (user) => {
    onUserChanged(user); // تمرير المستخدم الحالي (null إذا لم يسجل الدخول)
  });
}