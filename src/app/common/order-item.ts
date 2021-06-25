import { CartItem } from "./cart-item";

export class OrderItem {
    imageUrl: String;
    unitPrice: number;
    quantity: number;
    productId: String;

    constructor(cartItem: CartItem) {
        this.imageUrl = cartItem.imageUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        this.productId = cartItem.id;
    }
}
