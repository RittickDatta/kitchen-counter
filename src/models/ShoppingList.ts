import { Item } from "./Item"

export interface ShoppingList {
    items: Item[],
    onlyEssentialItems: boolean
}

export interface ShoppingListPendingItems {
    items: Item[],
    anyEssentialItem: boolean
}