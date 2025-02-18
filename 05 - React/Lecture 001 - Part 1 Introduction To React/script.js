const header1 = document.createElement('h1');
header1.innerText = "Hii EveryOne";
header1.style.backgroundColor = "blue";
header1.style.color = 'white';
header1.style.fontSize = "50px";
header1.style.padding = "10px";

const root = document.getElementById('root');

root.append(header1);

const header2 = document.createElement('h2');
header2.innerText = "Hii EveryOne";
header2.style.backgroundColor = "red";
header2.style.color = 'white';
header2.style.fontSize = "30px";
header2.style.padding = "10px";

root.append(header2);

// react

const React = {
    createElement: function(tag,styles, children){

        const element = document.createElement(tag);

        if( children !== ""){
            element.innerText = children;
        }

        for( key in styles){
            element.style[key] = styles[key];
        }

        return element;
    }
}

const header3 = React.createElement("h1",{
    fontSize: "30px",
    backgroundColor: "orange",
    color: "white",
},"Hello world!");

const header4 = React.createElement("h2",{
    fontSize: "20px",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    margin: "10px",
    fontFamily: "cursive",
    opacity: "0.8"
},"Hello world! from here!");

const p1 = React.createElement("p",{
    fontSize: "15px",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    margin: "10px",
    fontFamily: "cursive",
    opacity: "1"
},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime pariatur a nulla consectetur perspiciatis, ducimus delectus quasi nemo laudantium distinctio velit cupiditate explicabo officiis deserunt quisquam totam reiciendis facere. Repellendus, minus sunt, eius magnam omnis sint illum eos odio velit accusantium quaerat eligendi corporis quisquam. Veritatis vitae illum iste perferendis?");

root.append(header3);
root.append(header4);
root.append(p1);

const ReactDOM = {
    render : function( rootRender, element){
        rootRender.append(element);
    }
}

const renderRoot = document.getElementById('render');

const header31 = React.createElement("h1",{
    fontSize: "30px",
    backgroundColor: "orange",
    color: "white",
},"Hello world!");

const header41 = React.createElement("h2",{
    fontSize: "20px",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    margin: "10px",
    fontFamily: "cursive",
    opacity: "0.8"
},"Hello world! from here!");

const p11 = React.createElement("p",{
    fontSize: "15px",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    margin: "10px",
    fontFamily: "cursive",
    opacity: "1"
},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime pariatur a nulla consectetur perspiciatis, ducimus delectus quasi nemo laudantium distinctio velit cupiditate explicabo officiis deserunt quisquam totam reiciendis facere. Repellendus, minus sunt, eius magnam omnis sint illum eos odio velit accusantium quaerat eligendi corporis quisquam. Veritatis vitae illum iste perferendis?");

ReactDOM.render(renderRoot, header31);
ReactDOM.render(renderRoot, header41);
ReactDOM.render(renderRoot, p11);

const ol = React.createElement('ol',{},"");

const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JavaScript");

ReactDOM.render(ol,li1);
ReactDOM.render(ol,li2);
ReactDOM.render(ol,li3);

ReactDOM.render(renderRoot, ol);