import { Component, Prop } from '@stencil/core';

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

@Component({
  tag: 'bulma-menu',
  styleUrl: 'bulma-menu.scss',
  shadow: true
})
export class BulmaMenu {
  @Prop() data = _data;
  renderLink = item => {
    return (
      <a class={`${item.selected ? 'is-active' : undefined}`}>{item.name}</a>
    );
  };
  renderSubMenu = subMenu => {
    const subMenuLink = this.renderLink(subMenu);
    const subMenuItems = subMenu.items.map(item => {
      return <li>{this.renderLink(item)}</li>;
    });
    const subMenuList = <ul>{subMenuItems}</ul>;
    return [subMenuLink, subMenuList];
  };
  renderMenu = data => {
    return data.reduce((menuArray, topLevelItem) => {
      const menuLabel = <p class="menu-label">{topLevelItem.name}</p>;
      const children = topLevelItem.items.reduce((itemArray, item) => {
        if (item.items) {
          itemArray.push(<li>{this.renderSubMenu(item)}</li>);
        } else {
          itemArray.push(<li>{this.renderLink(item)}</li>);
        }
        return itemArray;
      }, []);
      const menuList = <ul class="menu-list">{children}</ul>;
      return [menuArray, menuLabel, menuList];
    }, []);
  };
  render() {
    return <aside class="menu">{this.renderMenu(this.data)}</aside>;
  }
}
