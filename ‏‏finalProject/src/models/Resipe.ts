export class Resipe{
    length: number;
    constructor(public idResipe?:any, public nameResipe?:string, public idKategory?:number,
         public preparationTime?:number, public DifficultyLevel?:number,public dateAdd:Date=new Date(), public components:string[]=[],public preparation:string[]=[], public idMistamesh?:any, public imgSrc?:string){}
}
