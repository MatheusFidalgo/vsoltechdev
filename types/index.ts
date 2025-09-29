export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;

}
export interface CartItem extends Product {
    quantity: number;
}

export interface CartContextType {
    cartItems: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (product: string) => void;
    increaseQuantity: (product: string) => void;
    decreaseQuantity: (product: string) => void;
    total: number;
}