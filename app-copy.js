import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () =>  {
    return <h1 className="head"> This is JSX Heading. 🚀</h1>
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => (
    <div id = "container">
        <Heading />
        <h1 className="heading">This is a JSX Component</h1>
    </div>
);
root.render(<HeadingComponent/>);




//EPISODE 1 & 2 STARTS

// const heading = React.createElement("h1",{id: "heading"},"Let's Learn React ❤️");
// const parentChild = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: 'child1'}, [
//         React.createElement("h1",{}, "I'm h1"),
//         React.createElement("h2",{}, "I'm h2"),
//     ]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h3",{}, "I'm h3"),
//         React.createElement("h4",{}, "I'm h4"),
//     ]),
// ])
// console.log("parentChild",parentChild)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",root)]
// root.render(parentChild);

//EPISODE 1 & 2 END