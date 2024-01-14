import {
  Component,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit,
  } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements AfterViewInit {
  @ViewChildren('navLink') navLinks!: QueryList<ElementRef>;

  private currentSelectedElement: HTMLElement | null = null;

  constructor() {}

  ngAfterViewInit() {
this.navLinks.forEach((elementRef: ElementRef) => {
  const nativeElement = elementRef.nativeElement;
  nativeElement.addEventListener('click', () => {
    if (this.currentSelectedElement) {
      this.currentSelectedElement.classList.remove('nav-label');
    }
    // console.log(`Clicked on: ${nativeElement.textContent}`);
    nativeElement.classList.add('nav-label');
    this.currentSelectedElement = nativeElement;
  });
});

  }
}

