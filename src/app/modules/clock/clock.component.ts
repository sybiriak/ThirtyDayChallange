import { Component, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent {

  @ViewChild('clockHourHand', { static: true })
  clockHourHand!: ElementRef<HTMLDivElement>;

  @ViewChild('clockMinuteHand', { static: true })
  clockMinuteHand!: ElementRef<HTMLDivElement>;

  @ViewChild('clockSecondsHand', { static: true })
  clockSecondsHand!: ElementRef<HTMLDivElement>;

  constructor(private renderer2: Renderer2) {
    this.initClock();
  }

  initClock() {
    setInterval(() => {
      const date: Date = new Date();
      this.setRotateDeg(date.getSeconds(), 60, this.clockSecondsHand.nativeElement);
      this.setRotateDeg(date.getMinutes(), 60, this.clockMinuteHand.nativeElement);
      this.setRotateDeg(date.getHours(), 12, this.clockHourHand.nativeElement);
    }, 1000);
  }
  
  setRotateDeg(currentNumber: number, divider: number, element: HTMLDivElement) {
    const rotateDeg = ((currentNumber / divider) * 360) + 90;
    this.renderer2.setStyle(element, 'transform', `translateX(-50%) rotate(${rotateDeg}deg)`);
  }
}
