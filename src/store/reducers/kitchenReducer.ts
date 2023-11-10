import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../models/Item";
import { Recipie } from "../../models/Recipie";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShoppingList } from "../../models/ShoppingList";

export interface KitchenState {
  inventory: Item[];
  recipies: Recipie[];
  shoppingList: ShoppingList;
}

const initialState: KitchenState = {
  inventory: [],
  recipies: [],
  shoppingList: { items: [], onlyEssentialItems: false },
};

const kitchenSlice = createSlice({
  name: "kitchen",
  initialState,
  reducers: {
    addItemToInventory: (state, action: PayloadAction<Item>) => {
      state.inventory.push(action.payload);
    },
    removeItemFromInventory: (state, action: PayloadAction<number>) => {
      state.inventory.filter(({ id }) => id != action.payload);
    },
    updatedItemInInventory: (state, action: PayloadAction<Item>) => {
      const itemIndex = state.inventory.findIndex(
        ({ id }) => id === action.payload.id,
      );
      state.inventory.splice(itemIndex, 1, action.payload);
    },
    addRecipie: (state, action: PayloadAction<Recipie>) => {
      state.recipies.push(action.payload);
    },
    removeRecipie: (state, action: PayloadAction<number>) => {
      state.recipies.filter(({ id }) => id !== action.payload);
    },
    updateRecipie: (state, action: PayloadAction<Recipie>) => {
      const itemIndex = state.recipies.findIndex(
        ({ id }) => id === action.payload.id,
      );
      state.recipies.splice(itemIndex, 1, action.payload);
    },
    addToShoppingList: (state, action: PayloadAction<Item>) => {
      state.shoppingList.items.push(action.payload);
    },
    removeFromShoppingList: (state, action: PayloadAction<number>) => {
      state.shoppingList.items.filter(({ id }) => id !== action.payload);
    },
    updateShoppingList: (state, action: PayloadAction<Item>) => {
      const itemIndex = state.shoppingList.items.findIndex(
        ({ id }) => id === action.payload.id,
      );
      state.shoppingList.items.splice(itemIndex, 1, action.payload);
    },
  },
});

export const {
  addItemToInventory,
  removeItemFromInventory,
  updatedItemInInventory,
  addRecipie,
  removeRecipie,
  updateRecipie,
  addToShoppingList,
  removeFromShoppingList,
  updateShoppingList,
} = kitchenSlice.actions;

export default kitchenSlice.reducer;
