import { Component, Directive, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  @Input() inputModel: string = '';
  @Input() buttonText: string = 'edit';
  @Input() showInput: boolean = false;
  @Input() title: boolean = true;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    if (!this.showInput) {
      this.showInput = true;
      this.title = false;
      this.buttonText = 'save';
    } else {
      if (this.inputModel.length !== 0) {
        console.log(this.inputModel);
      }
      this.buttonText = 'edit';
      this.showInput = false;
      this.title = true;
    }
  }
}
