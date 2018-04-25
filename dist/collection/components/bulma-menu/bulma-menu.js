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
export class BulmaMenu {
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
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        }
    }; }
    static get style() { return "/**style-placeholder:bulma-menu:**/"; }
}
