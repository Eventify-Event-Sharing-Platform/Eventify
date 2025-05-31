import { db } from './firebase.js';  // تأكد من مسار الاستيراد صحيح
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

async function fetchEvents() {
  try {
    const q = query(collection(db, 'events'), orderBy('date', 'asc'));
    const querySnapshot = await getDocs(q);

    const eventsList = document.getElementById('eventsList');
    if (querySnapshot.empty) {
      eventsList.innerHTML = '<p class="col-span-full text-center text-gray-500">No events available.</p>';
      return;
    }

    eventsList.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const event = doc.data();
      console.log('Event data:', event); // لمراقبة البيانات في الكونسول

      // تحقق من وجود التاريخ وخصائصه بأمان
      const seconds = event?.date?.seconds ?? null;
      const eventDate = seconds ? new Date(seconds * 1000) : null;
      const formattedDate = eventDate ? eventDate.toLocaleDateString() : 'No date';

      const title = event?.title ?? 'No Title';
      const location = event?.location ?? 'Unknown location';
      const description = event?.description ? event.description.substring(0, 100) + '...' : 'No description';
      const imageUrl = event?.imageUrl || 'https://via.placeholder.com/400x200?text=No+Image';

      // أنشئ بطاقة الحدث
      const eventCard = document.createElement('div');
      eventCard.className = 'bg-white rounded-lg shadow p-4 flex flex-col';

      eventCard.innerHTML = `
        <img src="${imageUrl}" alt="${title}" class="rounded-md mb-4 object-cover h-48 w-full" />
        <h3 class="text-xl font-semibold mb-2">${title}</h3>
        <p class="text-gray-600 mb-1"><strong>Date:</strong> ${formattedDate}</p>
        <p class="text-gray-600 mb-1"><strong>Location:</strong> ${location}</p>
        <p class="text-gray-700 flex-grow">${description}</p>
        <a href="event-details.html?id=${doc.id}" class="mt-4 inline-block text-blue-600 hover:underline">View Details</a>
      `;

      eventsList.appendChild(eventCard);
    });
  } catch (error) {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = `<p class="col-span-full text-center text-red-500">Error loading events: ${error.message}</p>`;
    console.error("Fetch events error:", error);
  }
}

// ناد الدالة عند تحميل الصفحة
fetchEvents();