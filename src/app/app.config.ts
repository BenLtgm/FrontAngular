import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-nu3v6yngsu53i6ru.us.auth0.com',
      clientId: '0X1wedW8pLLjAFB5IBZxNhFdBRxBPSPx',

      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: "http://localhost:5036"
      },

      httpInterceptor: {
        allowedList: [
          {
            uri: "http://localhost:5036/*",
            tokenOptions: {
              authorizationParams: {
                audience: "http://localhost:5036"
              }
            }
          },
          {
            uri: "https://localhost:7229/*",
            tokenOptions: {
              authorizationParams: {
                audience: "http://localhost:5036"
              }
            }
          }
        ]
      }
    }),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])), provideAnimationsAsync()
  ]
};
