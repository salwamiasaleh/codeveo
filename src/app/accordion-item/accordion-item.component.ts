import { query } from '@angular/animations';
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
  showtitle = true
  // for title end


 
  changetitle(index:number) {
    if (!this.accordionItems[index].showinputtitle) {
    
      this.accordionItems[index].showinputtitle = true;
      this.accordionItems[index].showtitle = false;
      this.ButtonTexttitle = 'save';
    } else {
    
      if (this.accordionItems[index].accordioninputtitle.length !== 0) {
        console.log(this.accordioninputtitle);
        this.accordionItems[index].title=this.accordionItems[index].accordioninputtitle
      }
      this.ButtonTexttitle = 'edit';
      this.accordionItems[index].showinputtitle = false;
      this.accordionItems[index].showtitle = true;
    }
  }
  accordioninputparagraph: string = '';
  ButtonTextparagraph: string = 'edit';
  showinputparagraph = false
  paragraph = true;
  //for paragraph end

  changeParagraph(index:number) {
    if (!this.accordionItems[index].showinputparagraph) {
      this.accordionItems[index].showinputparagraph = true;
      this.accordionItems[index].paragraph = false;
      this.ButtonTextparagraph = 'save';
    } else {
      if (this.accordionItems[index].accordioninputparagraph.length !== 0) {
        console.log(this.accordioninputparagraph);
        this.accordionItems[index].description=this.accordionItems[index].accordioninputparagraph;
      }
      this.ButtonTextparagraph = 'edit';
      this.accordionItems[index].showinputparagraph = false;  
      this.accordionItems[index].paragraph = true;  
    }
  }
  
}
