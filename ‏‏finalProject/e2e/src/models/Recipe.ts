export class Recipe{
    constructor(public idRecipe:string, public nameRecipe:string, public idCategory:String, public PreparationTimeInMinutes: number, public levelOfDifficulty:number,public dateAddRecipe:Date, public component:string[], public preparation:string[],public pasWordMishtamesh:string,public srcImg:string,public doDisplay:boolean){}
}