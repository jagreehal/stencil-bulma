import '../../stencil.core';
export declare class BulmaMenu {
    data: Object;
    renderLink: (item: any) => JSX.Element;
    renderSubMenu: (subMenu: any) => JSX.Element[];
    renderMenu: (data: any) => any;
    render(): JSX.Element;
}
