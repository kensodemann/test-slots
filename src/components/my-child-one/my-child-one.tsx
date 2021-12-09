import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-child-one',
  styleUrl: 'my-child-one.css',
  shadow: true,
})
export class MyChildOne {
  render() {
    return (
      <div>
        <h1>Child One</h1>
        <div>
          <span>start: </span><slot name="start"></slot>
        </div>
        <div>
          <span>end: </span><slot name="end"></slot>
        </div>
      </div>
    );
  }
}
