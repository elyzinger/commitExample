export class Product {
    id: string; // the id is a string from firestore
    name: string;
    comment: string = '';
    qty: number = 1;
     
    constructor(id, name, comment, qty){
        this.id = id
        this.name = name
        this.comment = comment
        this.qty - qty
    }
}