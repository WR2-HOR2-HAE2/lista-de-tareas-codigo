import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "lista-de-tareas-ffbd8", appId: "1:222798156712:web:fa52e43a8aaa04d812039d", storageBucket: "lista-de-tareas-ffbd8.firebasestorage.app", apiKey: "AIzaSyCZQzC_fb_MJPyWMtbGYP8S4X9SdfEe4OM", authDomain: "lista-de-tareas-ffbd8.firebaseapp.com", messagingSenderId: "222798156712" })), provideFirestore(() => getFirestore())]
};
