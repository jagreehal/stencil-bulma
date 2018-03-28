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
    static get style() { return "blockquote[data-bulma-menu], body[data-bulma-menu], dd[data-bulma-menu], dl[data-bulma-menu], dt[data-bulma-menu], fieldset[data-bulma-menu], figure[data-bulma-menu], h1[data-bulma-menu], h2[data-bulma-menu], h3[data-bulma-menu], h4[data-bulma-menu], h5[data-bulma-menu], h6[data-bulma-menu], hr[data-bulma-menu], html[data-bulma-menu], iframe[data-bulma-menu], legend[data-bulma-menu], li[data-bulma-menu], ol[data-bulma-menu], p[data-bulma-menu], pre[data-bulma-menu], textarea[data-bulma-menu], ul[data-bulma-menu]{margin:0;padding:0}h1[data-bulma-menu], h2[data-bulma-menu], h3[data-bulma-menu], h4[data-bulma-menu], h5[data-bulma-menu], h6[data-bulma-menu]{font-size:100%;font-weight:400}ul[data-bulma-menu]{list-style:none}button[data-bulma-menu], input[data-bulma-menu], select[data-bulma-menu], textarea[data-bulma-menu]{margin:0}html[data-bulma-menu]{-webkit-box-sizing:border-box;box-sizing:border-box}*[data-bulma-menu], [data-bulma-menu]:after, [data-bulma-menu]:before{-webkit-box-sizing:inherit;box-sizing:inherit}audio[data-bulma-menu], embed[data-bulma-menu], img[data-bulma-menu], object[data-bulma-menu], video[data-bulma-menu]{max-width:100%}iframe[data-bulma-menu]{border:0}table[data-bulma-menu]{border-collapse:collapse;border-spacing:0}td[data-bulma-menu], th[data-bulma-menu]{padding:0;text-align:left}.menu[data-bulma-menu]{font-size:1rem}.menu.is-small[data-bulma-menu]{font-size:.75rem}.menu.is-medium[data-bulma-menu]{font-size:1.25rem}.menu.is-large[data-bulma-menu]{font-size:1.5rem}.menu-list[data-bulma-menu]{line-height:1.25}.menu-list[data-bulma-menu]   a[data-bulma-menu]{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list[data-bulma-menu]   a[data-bulma-menu]:hover{background-color:#f5f5f5;color:#363636}.menu-list[data-bulma-menu]   a.is-active[data-bulma-menu]{background-color:#3273dc;color:#fff}.menu-list[data-bulma-menu]   li[data-bulma-menu]   ul[data-bulma-menu]{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label[data-bulma-menu]{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label[data-bulma-menu]:not(:first-child){margin-top:1em}.menu-label[data-bulma-menu]:not(:last-child){margin-bottom:1em}[data-bulma-menu-host]{display:block;font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif}"; }
}

export { BulmaMenu };