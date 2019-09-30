export class Product {

    constructor(private ID:number,
                private Name:string,
                private Img:string,
                private Quantity: number,
                private price:number,
                public CategoryID: number){}
}
