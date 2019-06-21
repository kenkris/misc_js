
var tree = {
    name: "Root",
    Data: [{
        name: "Mogens",
        Data: [{
            name: "First child",
            Data: []
        }, {
            name: "Second child",
            Data: []
        }, {
            name: "Third Child",
            Data: []
        }]
    }, {
        name: "JH",
        Data: [{
            name: "Another child",
            Data: [{
                name: "Last child",
                Data: []
            }]
        }]
    }]
};

let traversTree = (tree) => {

    let level = 1;
    console.log(tree.name);

    let traverse = (node, level) => {
        console.log(spacer(level) + node.name);
        if(node.Data.length){
            node.Data.forEach(el => {
                traverse(el, level+1);
            });
        }
    };

    let spacer = level => {
        let space = "";
        for(let i = 0; i<level; i++)
            space += "  ";
        return space;
    };

    if(tree.Data !== undefined){
        tree.Data.forEach(el => {
            traverse(el, level+1);
        });
    }
};

traversTree(tree);
