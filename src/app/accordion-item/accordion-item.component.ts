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
  accordioninputtitle: string = '';
  ButtonTexttitle: string = 'edit';
  showinputtitle = false
  title = true
  // for title end


 
  changetitle() {
    if (!this.showinputtitle) {
    
      this.showinputtitle = true;
      this.title = false;
      this.ButtonTexttitle = 'save';
    } else {
    
      if (this.accordioninputtitle.length !== 0) {
        console.log(this.accordioninputtitle);
      }
      this.ButtonTexttitle = 'edit';
      this.showinputtitle = false;
      this.title = true;
    }
  }
  accordioninputparagraph: string = '';
  ButtonTextparagraph: string = 'edit';
  showinputparagraph = false
  paragraph = true;
  //for paragraph end

  changeParagraph() {
    if (!this.showinputparagraph) {
      this.showinputparagraph = true;
      this.paragraph = false;
      this.ButtonTextparagraph = 'save';
    } else {
      if (this.accordioninputparagraph.length !== 0) {
        console.log(this.accordioninputparagraph);
      }
      this.ButtonTextparagraph = 'edit';
      this.showinputparagraph = false;  
      this.paragraph = true;  
    }
  }
  
}
