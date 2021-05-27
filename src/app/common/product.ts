import { logging } from "selenium-webdriver";

export class Product {
    id:String;
    sku: string ;
    name: string;
    description: string;
    unitPrice: string;
    imageUrl: string;
    active: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdated: Date;

}
