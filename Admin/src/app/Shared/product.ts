export class Product {
    constructor(
        public Name: string,
        public Price: number,
        public Quantity: number,
        public CategoryID: number,
       public ImagePrd:File,
       public IsDeleted
        ){

    }
}
