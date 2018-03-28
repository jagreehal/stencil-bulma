/*! Built with http://stenciljs.com */
const { h } = window.StencilBulma;

const _data = [
    {
        name: 'General',
        items: [{ name: 'Dashboard' }, { name: 'Customers' }]
    },
    {
        name: 'Administration',
        items: [
            { name: 'Team Settings' },
            {
                name: 'Manage Your Team',
                selected: true,
                items: [
                    { name: 'Members' },
                    { name: 'Plugins' },
                    { name: 'Add a member' }
                ]
            },
            { name: 'Invitations' },
            { name: 'Cloud Storage Environment Settings' },
            { name: 'Authentication' }
        ]
    },
    {
        name: 'General',
        items: [{ name: 'Payments' }, { name: 'Transfers' }, { name: 'Balance' }]
    }
];
class BulmaMenu {
    constructor() {
        this.data = _data;
        this.renderLink = item => {
            return (h("a", { class: `${item.selected ? 'is-active' : undefined}` }, item.name));
        };
        this.renderSubMenu = subMenu => {
            const subMenuLink = this.renderLink(subMenu);
            const subMenuItems = subMenu.items.map(item => {
                return h("li", null, this.renderLink(item));
            });
            const subMenuList = h("ul", null, subMenuItems);
            return [subMenuLink, subMenuList];
        };
        this.renderMenu = data => {
            return data.reduce((menuArray, topLevelItem) => {
                const menuLabel = h("p", { class: "menu-label" }, topLevelItem.name);
                const children = topLevelItem.items.reduce((itemArray, item) => {
                    if (item.items) {
                        itemArray.push(h("li", null, this.renderSubMenu(item)));
                    }
                    else {
                        itemArray.push(h("li", null, this.renderLink(item)));
                    }
                    return itemArray;
                }, []);
                const menuList = h("ul", { class: "menu-list" }, children);
                return [menuArray, menuLabel, menuList];
            }, []);
        };
    }
    render() {
        return h("aside", { class: "menu" }, this.renderMenu(this.data));
    }
    static get is() { return "bulma-menu"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "data": { "type": "Any", "attr": "data" } }; }
    static get style() { return "/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}audio,embed,img,object,video{max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#3273dc;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}:host{display:block;font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif}"; }
}

export { BulmaMenu };
