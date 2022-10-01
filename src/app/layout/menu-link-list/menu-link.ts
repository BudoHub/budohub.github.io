export interface MenuLink {
    // if two links have the same order, then they are sorted alphabetically
    // if a link has an order of -1 it is hidden and only accessible shown when in 'edit' mode
    order: number;
    // the angular route
    route: string;
    // the text to display
    description: string;
}