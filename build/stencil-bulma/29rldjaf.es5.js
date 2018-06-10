/*! Built with http://stenciljs.com */
StencilBulma.loadBundle("29rldjaf",["exports"],function(e){var t=window.StencilBulma.h,i=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"card"},this.cardImage?t("div",{class:"card-image"},t("figure",{class:"image is-4by3"},t("img",{src:this.cardImage,alt:this.cardImagePlaceholder}))):void 0,t("div",{class:"card-content"},t("div",{class:"media"},this.mediaImage?t("div",{class:"media-left"},t("figure",{class:"image is-48x48"},t("img",{src:this.mediaImage,alt:this.mediaImagePlaceholder}))):void 0,t("div",{class:"media-content"},this.mediaTitle?t("p",{class:"title is-4"},this.mediaTitle):void 0,this.mediaSubTitle?t("p",{class:"subtitle is-6"},this.mediaSubTitle):void 0)),t("div",{class:"content"},t("slot",null))))},Object.defineProperty(e,"is",{get:function(){return"bulma-card"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cardImage:{type:String,attr:"card-image"},cardImagePlaceholder:{type:String,attr:"card-image-placeholder"},mediaImage:{type:String,attr:"media-image"},mediaImagePlaceholder:{type:String,attr:"media-image-placeholder"},mediaSubTitle:{type:String,attr:"media-sub-title"},mediaTitle:{type:String,attr:"media-title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@-webkit-keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}audio,img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}.media{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:left}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid rgba(219,219,219,.5);display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid rgba(219,219,219,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;text-align:left}.card{background-color:#fff;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;max-width:100%;position:relative}.card-header{background-color:none;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-shadow:0 1px 2px rgba(10,10,10,.1);box-shadow:0 1px 2px rgba(10,10,10,.1);display:-webkit-box;display:-ms-flexbox;display:flex}.card-header-title{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-weight:700;padding:.75rem}.card-header-title.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.card-header-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.75rem}.card-image{display:block;position:relative}.card-content{background-color:none;padding:1.5rem}.card-footer{background-color:none;border-top:1px solid #dbdbdb;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex}.card-footer-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #dbdbdb}.card .media:not(:last-child){margin-bottom:.75rem}:host{display:block;font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title.is-4{font-size:1.5rem}.title.is-6{font-size:1rem}.image{height:100%;width:100%}.image.is-48x48{height:48px;width:48px}::slotted(*){font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif}"},enumerable:!0,configurable:!0}),e}();e.BulmaCard=i,Object.defineProperty(e,"__esModule",{value:!0})});