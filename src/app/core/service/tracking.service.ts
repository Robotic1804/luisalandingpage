import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  logAffiliateClick() {
    // Opción 1: Evento de GA4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click_affiliate_link', {
        event_category: 'conversion',
        event_label: 'sensationbrands',
      });
    }

    // Opción 2: Enviar a tu API (opcional)
    // fetch('/api/log-click', { method: 'POST' });
  }
}
