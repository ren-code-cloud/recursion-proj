const document = {
  childNodes: [
    {
      nodeName: "html",
      childNodes: [
        {
          nodeName: "head",
          childNodes: [
            {
              nodeName: "script",
              innerText: "console.log('hi');",
            },
          ],
        },
        {
          nodeName: "body",
          childNodes: [
            {
              nodeName: "ul",
              childNodes: [
                {
                  nodeName: "li",
                  childNodes: [
                    {
                      nodeName: "b",
                      innerText: "Home",
                    },
                  ],
                },
                {
                  nodeName: "li",
                  innerText: "Blog",
                },
                {
                  nodeName: "li",
                  innerText: "About",
                },
              ],
            },
            {
              nodeName: "div",
              childNodes: [
                {
                  nodeName: "h1",
                  innerText: "My Blog",
                },
                {
                  nodeName: "p",
                  innerText: "Welcome to my blog!",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};


const constructDOM = (node) => {
  if (node.innerText) return node.innerText;
  
  let html = "";
  for (const childNode of node.childNodes) {
    html += `<${childNode.nodeName}>`; //<h1>
    // add the inside text/html in between the tags
    html += constructDOM(childNode); // My Blog
    html += `</${childNode.nodeName}>`; //</h1>
  }
  return html;
}

console.log(constructDOM(document));