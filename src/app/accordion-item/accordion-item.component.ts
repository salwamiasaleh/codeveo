import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
})
export class AccordionItemComponent {
  @Input() accordionItems: any[] = [];
  toggleSubtitle(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    const parentItem = clickedElement.closest<HTMLElement>('.item');
    const subtitle = parentItem?.querySelector<HTMLElement>(
      '.itm-subtitle-inner'
    );
    const arrowElement =
      parentItem?.querySelector<HTMLElement>('.rotate-arrow');

    const allItems = document.querySelectorAll<HTMLElement>('.item');
    allItems.forEach((item) => {
      if (item !== parentItem) {
        const otherSubtitle = item.querySelector<HTMLElement>(
          '.itm-subtitle-inner'
        );
        const otherArrow = item.querySelector<HTMLElement>('.rotate-arrow');
        if (otherSubtitle && !otherSubtitle.classList.contains('hidden')) {
          otherSubtitle.classList.add('hidden');
          otherArrow?.classList.remove('rotate');
        }
      }
    });

    if (subtitle) {
      subtitle.classList.toggle('hidden');
    }

    arrowElement?.classList.toggle('rotate');
  }


}
