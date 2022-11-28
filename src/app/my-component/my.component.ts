import {Component, Input} from '@angular/core';
import {MyDirective} from './my.directive';

@Component({
  selector: 'app-my-component',
  template: `<span>MyComponent</span>`,
  hostDirectives: [{
    directive: MyDirective,
    inputs: ['myDirectiveSomeInput: someInput'],
  }],
  standalone: true,
})
export class MyComponent {

  @Input()
  public someInput = false;
}
