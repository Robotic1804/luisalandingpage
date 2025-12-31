import { Component, OnInit, inject } from '@angular/core';  
import { Router } from '@angular/router';
import { TrackingService } from '../../core/service/tracking.service';


@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css'],
})
export class GoComponent implements OnInit {
  private router = inject(Router);
  private tracking = inject(TrackingService);

  ngOnInit() {
    // Opcional: registrar el clic (puedes enviar a tu API o GA4)
    this.tracking.logAffiliateClick();

    // Redirige después de un breve delay para permitir tracking
    setTimeout(() => {
      window.location.href =
        'https://sensationbrands.net/luisa-navarro/?fbclid=IwY2xjawO-YQBleHRuA2FlbQIxMABicmlkETF4bTZwbzFybXFKNDVBdTV2c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiuMkM6CErYYZOCPr10cv0iBjRdDV2uNH6WzVoEzyzsLEpfuPQiH-k1Lm_-v_aem_QW5aBjjMsssUmy7QRTwsvw';
      // ⚠️ Asegúrate de usar el enlace correcto (verifica si es .net o .com)
    }, 300);
  }
}
