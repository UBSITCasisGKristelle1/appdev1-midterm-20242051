import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withViewTransitions()
    ),
    provideAnimations()
  ]
};
