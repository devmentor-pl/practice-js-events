const button = document.querySelectorAll("button");
console.log(button);

function oneTime(node, type, callback) {
    node.addEventListener(type, function(e) {
        e.target.removeEventListener(e.type, arguments.callee);
        return callback(e);
    });
}

button.forEach(function(item) {
    oneTime(item, "click", function() {
        item.innerText = "clicked";
        console.log(item.innerText);
    });
});