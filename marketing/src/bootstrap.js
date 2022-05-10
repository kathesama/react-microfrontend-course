import React from 'react';
import ReactDom from 'react-dom';

const mount = (element) => {
    ReactDom.render(<div><h1>Hi there!</h1></div>, element);
}

if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#_marketing-dev-root');
    if (element) {
        mount(element);
    }
}

export { mount };


