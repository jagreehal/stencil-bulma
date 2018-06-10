import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'bulma-modal',
  styleUrl: 'bulma-modal.scss',
  shadow: true
})
export class BulmaModal {
  @Prop() isActive: boolean;
  @State() _isActive: boolean;

  componentWillLoad() {
    this._isActive = this.isActive;
  }

  closeModal = () => {
    this._isActive = false;
  }

  openModal = () => {
    this._isActive = true;
  }

  render() {
    return ([
      <div class={`modal ${this._isActive ? 'is-active' : ''}`}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <slot />
        </div>
        <button class="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
      </div>,
      <div onClick={this.openModal}>
        <slot name="trigger">
          Open
      </slot>
      </div>]
    );
  }
}
