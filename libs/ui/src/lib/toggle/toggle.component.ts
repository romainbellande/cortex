import { Component, Input } from '@angular/core';

@Component({
  selector: 'cortex-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input()
  key!: string;

  @Input()
  label!: string;
}
