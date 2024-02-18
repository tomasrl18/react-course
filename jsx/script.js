import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
import React from "https://esm.sh/react@18.2.0/"

const appDomElement = document.getElementById("app")
const root = ReactDOM.createRoot(appDomElement)


/*
Sin JSX

const btn_1 = React.createElement('button', { "data-id": 123 }, 'Btn 1');
const btn_2 = React.createElement('button', { "data-id": 456 }, 'Btn 2');
const btn_3 = React.createElement('button', { "data-id": 789 }, 'Btn 3');

const app = React.createElement(React.Fragment, null, [btn_1, btn_2, btn_3]);

root.render(app)
*/

/*
Con JSX

<React.Fragment>
    <button data-id={123}>Btn 1</button>
    <button data-id={456}>Btn 2</button>
    <button data-id={789}>Btn 3</button>
</React.Fragment>
*/