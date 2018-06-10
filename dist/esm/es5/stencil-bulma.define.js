// StencilBulma: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './stencil-bulma.core.js';
import {
  BulmaCard,
  BulmaMenu,
  BulmaModal
} from './stencil-bulma.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    BulmaCard,
    BulmaMenu,
    BulmaModal
  ], opts);
}