import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bulma-card',
  styleUrl: 'bulma-card.scss',
  shadow: true
})
export class BulmaCard {

  @Prop() cardImage: string;
  @Prop() cardImagePlaceholder: string;
  @Prop() mediaImage: string;
  @Prop() mediaImagePlaceholder: string;
  @Prop() mediaTitle: string;
  @Prop() mediaSubTitle: string;

  render() {
    return (
      <div class="card">
        {this.cardImage ?
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={this.cardImage} alt={this.cardImagePlaceholder} />
            </figure>
          </div>
          : undefined}
        <div class="card-content">
          <div class="media">
            {this.mediaImage ?
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src={this.mediaImage} alt={this.mediaImagePlaceholder} />
                </figure>
              </div> : undefined}
            <div class="media-content">
              {this.mediaTitle ? <p class="title is-4">{this.mediaTitle}</p> : undefined}
              {this.mediaSubTitle ? <p class="subtitle is-6">{this.mediaSubTitle}</p> : undefined}
            </div>
          </div>
          <div class="content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
