
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyCCcMGE-aS5Gd9U4q16sdLF58MKo57M8Sw",
  authDomain: "eventify-f9d90.firebaseapp.com",
  projectId: "eventify-f9d90",
  storageBucket: "eventify-f9d90.appspot.com",
  messagingSenderId: "788683506483",
  appId: "1:788683506483:web:203d5b1972ef2d0735b446",
  measurementId: "G-GTNMLR544Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export async function addSampleEvents() {
  const events = [
    {
      title: "Summer Music Festival",
      description: "Join us for a day full of live music and fun.",
      location: "Central Park",
      date: Timestamp.fromDate(new Date("2025-07-20")),
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Art Exhibition",
      description: "Explore stunning artworks from local artists.",
      location: "City Art Gallery",
      date: Timestamp.fromDate(new Date("2025-08-05")),
      imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tech Conference 2025",
      description: "Innovations and trends in the tech world.",
      location: "Convention Center",
      date: Timestamp.fromDate(new Date("2025-09-12")),
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Charity Run",
      description: "Run to support local charities and make a difference.",
      location: "Riverfront Park",
      date: Timestamp.fromDate(new Date("2025-06-15")),
      imageUrl: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Food Truck Rally",
      description: "Taste delicious foods from the best food trucks.",
      location: "Downtown Square",
      date: Timestamp.fromDate(new Date("2025-07-10")),
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Yoga Workshop",
      description: "Find your balance with guided yoga sessions.",
      location: "Wellness Center",
      date: Timestamp.fromDate(new Date("2025-06-25")),
      imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Book Fair",
      description: "Discover new books and meet your favorite authors.",
      location: "City Library",
      date: Timestamp.fromDate(new Date("2025-08-20")),
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Film Festival",
      description: "Watch independent films and documentaries.",
      location: "Downtown Theater",
      date: Timestamp.fromDate(new Date("2025-09-05")),
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Farmers Market",
      description: "Fresh produce and handmade goods from local farmers.",
      location: "Market Square",
      date: Timestamp.fromDate(new Date("2025-06-30")),
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Comedy Night",
      description: "Laugh out loud with the best stand-up comedians.",
      location: "Comedy Club",
      date: Timestamp.fromDate(new Date("2025-07-18")),
      imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Photography Workshop",
      description: "Learn photography tips and tricks from experts.",
      location: "Studio 21",
      date: Timestamp.fromDate(new Date("2025-08-12")),
      imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dance Party",
      description: "Get your groove on at this lively dance event.",
      location: "Club Neon",
      date: Timestamp.fromDate(new Date("2025-09-01")),
      imageUrl: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Science Expo",
      description: "Explore the latest in science and technology.",
      location: "Science Museum",
      date: Timestamp.fromDate(new Date("2025-07-25")),
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Theater Play",
      description: "Enjoy a live performance by local actors.",
      location: "Grand Theater",
      date: Timestamp.fromDate(new Date("2025-08-28")),
      imageUrl: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Craft Workshop",
      description: "Hands-on crafting activities for all ages.",
      location: "Community Center",
      date: Timestamp.fromDate(new Date("2025-06-20")),
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const eventsCollection = collection(db, 'events');

  for (const event of events) {
    await addDoc(eventsCollection, event);
  }
  console.log('Sample events added!');
}
