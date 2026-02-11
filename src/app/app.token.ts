// app.tokens.ts
import { InjectionToken } from '@angular/core';
export interface AppConfig {
  apiUrl: string;
  timeout: number;
}
export const API_URL = new InjectionToken<string>('');

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
