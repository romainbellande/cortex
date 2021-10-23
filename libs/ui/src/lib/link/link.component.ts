import { Component, Input } from '@angular/core';

@Component({
  selector: 'cortex-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input()
  to!: string;
}
