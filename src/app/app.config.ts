import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "nucleo-app-6defa", appId: "1:207923771644:web:0bd5f6ea4661d904a1ff79", storageBucket: "nucleo-app-6defa.firebasestorage.app", apiKey: "AIzaSyCRHaF4rD__RLI6XAcH9AWyO1TMEA3AbL4", authDomain: "nucleo-app-6defa.firebaseapp.com", messagingSenderId: "207923771644" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
