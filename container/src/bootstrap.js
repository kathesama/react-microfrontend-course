import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';
import 'cart/CartShow';

console.log('container');

productMount(document.querySelector('#prod-products'));
cartMount(document.querySelector('#prod-cart'));
