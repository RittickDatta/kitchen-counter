import { Item } from "./Item";
import { RecipieCategory, RecipieDifficulty, SpiceLevel } from "../enums/recipieCategory";

export interface Recipie {
    id: number;
    category: RecipieCategory;
    name: string;
    description: string;
    ingridients: Item[];
    steps: string;
    cookingTime: number;
    difficultyLevel: RecipieDifficulty;
    spiceLevel: SpiceLevel;
}