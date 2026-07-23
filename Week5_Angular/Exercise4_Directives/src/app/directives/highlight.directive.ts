import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective implements OnInit {
  @Input() appHighlight: string = 'yellow';
  @Input() defaultColor: string = 'transparent';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
