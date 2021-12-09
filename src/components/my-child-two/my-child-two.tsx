import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-child-two',
  styleUrl: 'my-child-two.css',
  shadow: true,
})
export class MyChildTwo {
  render() {
    return (
      <div>
        <h1>Child Two</h1>
        <div>
          <span>start: </span><slot name="start"></slot>
        </div>
        <div>
          <span>default: </span><slot></slot>
        </div>
        <div>
          <span>end: </span><slot name="end"></slot>
        </div>
      </div>
    );
  }
}
