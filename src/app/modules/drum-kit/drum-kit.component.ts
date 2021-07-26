import { buttonsMock } from './drum-kit.mock';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener } from '@angular/core';
import { DrumButton } from './drum-kit.interface';

@Component({
  selector: 'app-drum-kit',
  templateUrl: './drum-kit.component.html',
  styleUrls: ['./drum-kit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrumKitComponent {

  buttons: DrumButton[] = buttonsMock;
  pressedButtonKey: string = '';

  @HostListener('window:keydown', ['$event'])
  protected keyDownHandler(event: KeyboardEvent) {
    const button = this.buttons.find(d => d.key === event.code.slice(3));
    if (button) {
      const element = (this.element.nativeElement as HTMLElement).querySelector(`button[data-key="${button.key}"]`);
      if (element) {
        this.playSound(button.key, element.querySelector('audio') as HTMLAudioElement);
      }
    }    
  }

  constructor(private element: ElementRef) {}

  playSound(buttonKey: string, drumAudio: HTMLAudioElement): void {
    if (!drumAudio) return;
    drumAudio.currentTime = 0;
    drumAudio.play();
    this.pressedButtonKey = buttonKey;
  }
}
