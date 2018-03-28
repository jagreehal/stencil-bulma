import '../../stencil.core';
export declare class BulmaMenu {
    data: {
        name: string;
        items: ({
            name: string;
            selected?: undefined;
            items?: undefined;
        } | {
            name: string;
            selected: boolean;
            items: {
                name: string;
            }[];
        })[];
    }[];
    renderLink: (item: any) => JSX.Element;
    renderSubMenu: (subMenu: any) => JSX.Element[];
    renderMenu: (data: any) => any;
    render(): JSX.Element;
}
