import { Item } from "./Item"

export interface ShoppingList {
    items: Item[],
    onlyEssentialItems: boolean
}