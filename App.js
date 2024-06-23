// const heading = React.createElement("h1", {id:"heading"}, "HW from JS");
// console.log("heading ", heading)

const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"child"}, [React.createElement("h1", {id:"heading"}, "I am h1 " ) , React.createElement("h2", {id:"heading2"}, "I am h2 " ) ]) , React.createElement("div", {id:"child2"}, [React.createElement("h1", {id:"heading"}, "I am h1 " ) , React.createElement("h2", {id:"heading2"}, "I am h2 " ) ]) ])

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log("root ", root)
root.render(parent)