import faker from 'faker';



const mount = (el) => {
    const cartText = `<div>You habe ${faker.random.number()} intems in your cart</div>`;
    console.log(cartText);

    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    if (el) {
        mount(el);
    }
}

export { mount };
