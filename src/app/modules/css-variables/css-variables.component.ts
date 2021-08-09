import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-css-variables',
  templateUrl: './css-variables.component.html',
  styleUrls: ['./css-variables.component.scss']
})
export class CssVariablesComponent {

  spacing: number = 10;

  blur: number = 10;

  color: string = '#ffc600';

  constructor(
    private element: ElementRef
  ) {
    this.setProperty('spacing', this.spacing + 'px');
    this.setProperty('blur', this.blur + 'px');
    this.setProperty('color', this.color);
  }

  handleChange(value: string | number, input: HTMLInputElement): void {
    const suffix = input.dataset.sizing || '';
    this.setProperty(input.name, value + suffix);
  }

  setProperty(name: string, value: string): void {
    this.element.nativeElement.style.setProperty(`--${name}`, value);
  }
}
