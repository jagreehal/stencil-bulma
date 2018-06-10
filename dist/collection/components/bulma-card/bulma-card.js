export class BulmaCard {
    render() {
        return (h("div", { class: "card" },
            this.cardImage ?
                h("div", { class: "card-image" },
                    h("figure", { class: "image is-4by3" },
                        h("img", { src: this.cardImage, alt: this.cardImagePlaceholder })))
                : undefined,
            h("div", { class: "card-content" },
                h("div", { class: "media" },
                    this.mediaImage ?
                        h("div", { class: "media-left" },
                            h("figure", { class: "image is-48x48" },
                                h("img", { src: this.mediaImage, alt: this.mediaImagePlaceholder }))) : undefined,
                    h("div", { class: "media-content" },
                        this.mediaTitle ? h("p", { class: "title is-4" }, this.mediaTitle) : undefined,
                        this.mediaSubTitle ? h("p", { class: "subtitle is-6" }, this.mediaSubTitle) : undefined)),
                h("div", { class: "content" },
                    h("slot", null)))));
    }
    static get is() { return "bulma-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cardImage": {
            "type": String,
            "attr": "card-image"
        },
        "cardImagePlaceholder": {
            "type": String,
            "attr": "card-image-placeholder"
        },
        "mediaImage": {
            "type": String,
            "attr": "media-image"
        },
        "mediaImagePlaceholder": {
            "type": String,
            "attr": "media-image-placeholder"
        },
        "mediaSubTitle": {
            "type": String,
            "attr": "media-sub-title"
        },
        "mediaTitle": {
            "type": String,
            "attr": "media-title"
        }
    }; }
    static get style() { return "/**style-placeholder:bulma-card:**/"; }
}
