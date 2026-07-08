const h1 = document.getElementById("main-heading");

function replaceTagName(node, newTagName) {
  if (!node || !(node instanceof Element)) {
    console.error("Invalid node provided");
    return null;
  } else {
    const newNode = document.createElement(newTagName);
    newNode.innerHTML = node.innerHTML;

    // ===== 💡 1st methods =====
    // for (let attr of Array.from(node.attributes)) {
    //   newNode.setAttribute(attr.name, attr.value);
    // }

    // ===== 💡 2nd methods =====
    Array.from(node.attributes).forEach((attr) => {
      newNode.setAttribute(attr.name, attr.value);
    });

    node.replaceWith(newNode);
  }
}

replaceTagName(h1, "p");
