import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <div>
        <div>
          <span>start: </span><slot name="start"></slot>
        </div>
        <div>
          <span>default: </span><slot></slot>
        </div>

        <my-child-one>
          <slot name="start"></slot>
        </my-child-one>

        <my-child-two>
          <slot name="start"></slot>
        </my-child-two>

        <my-child-one>
          <slot name="anotherone"></slot>
        </my-child-one>

        <my-child-two>
          <slot name="anothertwo"></slot>
        </my-child-two>

        <my-child-two>
          <slot name="end"></slot>
        </my-child-two>
      </div>
    );
  }
}
