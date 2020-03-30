// The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. 

// Create a new paragraph element, and append it to the end of the document body
let p = document.createElement("p");
var textnode=document.createTextNode("Water");
p.appendChild(textnode);
document.body.appendChild(p);