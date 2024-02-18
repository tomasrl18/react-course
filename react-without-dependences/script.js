import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
import React from "https://esm.sh/react@18.2.0/"

const appDomElement = document.getElementById("app")
const root = ReactDOM.createRoot(appDomElement)

/*
    Esto no se puede hacer, React no puede renderizar más de un elemento
    a la vez, de esta forma no

    const btn_1 = React.createElement('button', { "data-id": 123 }, 'Btn 1');
    const btn_2 = React.createElement('button', { "data-id": 456 }, 'Btn 2');
    const btn_3 = React.createElement('button', { "data-id": 789 }, 'Btn 3');

    root.render(btn_1, btn_2, btn_3)
*/

/*
    La forma para que pueda rederizar más de una elemento es envolviendolos
    en otro elemento, como un div
*/

/*
    const btn_1 = React.createElement('button', { "data-id": 123 }, 'Btn 1');
    const btn_2 = React.createElement('button', { "data-id": 456 }, 'Btn 2');
    const btn_3 = React.createElement('button', { "data-id": 789 }, 'Btn 3');

    const div = React.createElement('div', null, [btn_1, btn_2, btn_3]);

    root.render(div)
*/

/*
    El problema de la forma anterior es que los botones están envueltos en un
    div, lo que no es necesario, para solucionar esto se puede usar un fragment
*/

const btn_1 = React.createElement('button', { "data-id": 123 }, 'Btn 1');
const btn_2 = React.createElement('button', { "data-id": 456 }, 'Btn 2');
const btn_3 = React.createElement('button', { "data-id": 789 }, 'Btn 3');

const app = React.createElement(React.Fragment, null, [btn_1, btn_2, btn_3]);

root.render(app)