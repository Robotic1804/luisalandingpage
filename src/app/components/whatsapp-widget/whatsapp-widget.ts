import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-widget',
  imports: [CommonModule],
  templateUrl: './whatsapp-widget.html',
  styleUrl: './whatsapp-widget.css',
  standalone: true
})
export class WhatsappWidget {
  isOpen = false;

  // Configuración de contactos de WhatsApp
  contacts = [
    {
      name: 'Sensation Brands',
      subtitle: 'Sensation Brands',
      phoneNumber: '13236024043', // Reemplaza con tu número (código de país + número sin +)
      avatar: 'images/luisa.jpeg', // Opcional: ruta a imagen de avatar
    },
    // Puedes agregar más contactos aquí
  ];

  toggleWidget() {
    this.isOpen = !this.isOpen;
  }

  closeWidget() {
    this.isOpen = false;
  }

  openWhatsApp(phoneNumber: string) {
    const message = encodeURIComponent('¡Hola! Quiero más información.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}
