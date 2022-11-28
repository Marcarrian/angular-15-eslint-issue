import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
  standalone: true,
})
export class MyDirective {

  @Input()
  public myDirectiveSomeInput = false;
}
