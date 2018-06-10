export class BulmaModal {
    constructor() {
        this.closeModal = () => {
            this._isActive = false;
        };
        this.openModal = () => {
            this._isActive = true;
        };
    }
    componentWillLoad() {
        this._isActive = this.isActive;
    }
    render() {
        return ([
            h("div", { class: `modal ${this._isActive ? 'is-active' : ''}` },
                h("div", { class: "modal-background" }),
                h("div", { class: "modal-content" },
                    h("slot", null)),
                h("button", { class: "modal-close is-large", "aria-label": "close", onClick: this.closeModal })),
            h("div", { onClick: this.openModal },
                h("slot", { name: "trigger" }, "Open"))
        ]);
    }
    static get is() { return "bulma-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_isActive": {
            "state": true
        },
        "isActive": {
            "type": Boolean,
            "attr": "is-active"
        }
    }; }
    static get style() { return "/**style-placeholder:bulma-modal:**/"; }
}
