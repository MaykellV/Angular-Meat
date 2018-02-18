import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "app/order/order.model";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "app/app.api";
import {Http, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) { }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
    }

    clear() {
        this.cartService.clear()
    }
}