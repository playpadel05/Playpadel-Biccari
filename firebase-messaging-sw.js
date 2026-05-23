importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            "AIzaSyDedRUBLyAT6yRxQ4ZJWwwJIlVvFyLEW8Q",
  authDomain:        "playpadel-biccari.firebaseapp.com",
  projectId:         "playpadel-biccari",
  storageBucket:     "playpadel-biccari.firebasestorage.app",
  messagingSenderId: "239722542498",
  appId:             "1:239722542498:web:c085d112c3c560686c2efb"
});

const messaging = firebase.messaging();

// Notifiche in background (telefono bloccato / sito chiuso)
messaging.onBackgroundMessage(function(payload) {
  const n = payload.notification || {};
  const title = n.title || 'Play Padel Biccari';
  const body  = n.body  || '';

  self.registration.showNotification(title, {
    body:    body,
    icon:    '/Playpadel-Biccari/icon-192.png',
    badge:   '/Playpadel-Biccari/icon-192.png',
    vibrate: [200, 100, 200],
    data:    payload.data || {}
  });
});

// Click sulla notifica → apre il sito
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://playpadel05.github.io/Playpadel-Biccari/')
  );
});
