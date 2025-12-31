import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappWidget } from './whatsapp-widget';

describe('WhatsappWidget', () => {
  let component: WhatsappWidget;
  let fixture: ComponentFixture<WhatsappWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
