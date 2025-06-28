import { addSampleEvents } from './firebase.js';

addSampleEvents().then(() => {
  alert("Sample events added to Firestore!");
});
