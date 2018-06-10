/*! Built with http://stenciljs.com */
const{h:t}=window.StencilBulma;class s{constructor(){this.closeModal=(()=>{this._isActive=!1}),this.openModal=(()=>{this._isActive=!0})}componentWillLoad(){this._isActive=this.isActive}render(){return[t("div",{class:`modal ${this._isActive?"is-active":""}`},t("div",{class:"modal-background"}),t("div",{class:"modal-content"},t("slot",null)),t("button",{class:"modal-close is-large","aria-label":"close",onClick:this.closeModal})),t("div",{onClick:this.openModal},t("slot",{name:"trigger"},"Open"))]}static get is(){return"bulma-modal"}static get encapsulation(){return"shadow"}static get properties(){return{_isActive:{state:!0},isActive:{type:Boolean,attr:"is-active"}}}static get style(){return"\@-webkit-keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.modal-close[data-bulma-modal]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;cursor:pointer;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:0;vertical-align:top}.modal-close[data-bulma-modal]::after, .modal-close[data-bulma-modal]::before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.modal-close[data-bulma-modal]::before{height:2px;width:50%}.modal-close[data-bulma-modal]::after{height:50%;width:2px}.modal-close[data-bulma-modal]:focus, .modal-close[data-bulma-modal]:hover{background-color:rgba(10,10,10,.3)}.modal-close[data-bulma-modal]:active{background-color:rgba(10,10,10,.4)}.is-small.modal-close[data-bulma-modal]{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.modal-close[data-bulma-modal]{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.modal-close[data-bulma-modal]{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.modal[data-bulma-modal], .modal-background[data-bulma-modal]{bottom:0;left:0;position:absolute;right:0;top:0}blockquote[data-bulma-modal], body[data-bulma-modal], dd[data-bulma-modal], dl[data-bulma-modal], dt[data-bulma-modal], fieldset[data-bulma-modal], figure[data-bulma-modal], h1[data-bulma-modal], h2[data-bulma-modal], h3[data-bulma-modal], h4[data-bulma-modal], h5[data-bulma-modal], h6[data-bulma-modal], hr[data-bulma-modal], html[data-bulma-modal], iframe[data-bulma-modal], legend[data-bulma-modal], li[data-bulma-modal], ol[data-bulma-modal], p[data-bulma-modal], pre[data-bulma-modal], textarea[data-bulma-modal], ul[data-bulma-modal]{margin:0;padding:0}h1[data-bulma-modal], h2[data-bulma-modal], h3[data-bulma-modal], h4[data-bulma-modal], h5[data-bulma-modal], h6[data-bulma-modal]{font-size:100%;font-weight:400}ul[data-bulma-modal]{list-style:none}button[data-bulma-modal], input[data-bulma-modal], select[data-bulma-modal], textarea[data-bulma-modal]{margin:0}html[data-bulma-modal]{-webkit-box-sizing:border-box;box-sizing:border-box}*[data-bulma-modal], [data-bulma-modal]::after, [data-bulma-modal]::before{-webkit-box-sizing:inherit;box-sizing:inherit}audio[data-bulma-modal], img[data-bulma-modal], video[data-bulma-modal]{height:auto;max-width:100%}iframe[data-bulma-modal]{border:0}table[data-bulma-modal]{border-collapse:collapse;border-spacing:0}td[data-bulma-modal], th[data-bulma-modal]{padding:0;text-align:left}.modal[data-bulma-modal]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active[data-bulma-modal]{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-background[data-bulma-modal]{background-color:rgba(10,10,10,.86)}.modal-card[data-bulma-modal], .modal-content[data-bulma-modal]{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}\@media screen and (min-width:769px),print{.modal-card[data-bulma-modal], .modal-content[data-bulma-modal]{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close[data-bulma-modal]{background:0 0;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card[data-bulma-modal]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden}.modal-card-foot[data-bulma-modal], .modal-card-head[data-bulma-modal]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;position:relative}.modal-card-head[data-bulma-modal]{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title[data-bulma-modal]{color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot[data-bulma-modal]{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot[data-bulma-modal]   .button[data-bulma-modal]:not(:last-child){margin-right:10px}.modal-card-body[data-bulma-modal]{-webkit-overflow-scrolling:touch;background-color:#fff;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;padding:20px}[data-bulma-modal-host]{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif}"}}export{s as BulmaModal};