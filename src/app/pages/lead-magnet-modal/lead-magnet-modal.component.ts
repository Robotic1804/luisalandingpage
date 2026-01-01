import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-magnet-modal',
  templateUrl: './lead-magnet-modal.component.html',
  styleUrls: ['./lead-magnet-modal.component.css'],
  standalone: true,
})
export class LeadMagnetModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClaimDiscount() {
    // Handle discount claim logic here
    console.log('Discount claimed!');
  }
}
