const container = document.getElementById("results");

var coin = {

    state: 0,

    flip: function () {
        return this.state = Math.round(Math.random());

        // randomly set this.state to be either 0 or 1
    },

    toString: function () {
        // return this.state === 0 ? "H" : "T"; // ternary operator

        if (this.state === 0) {
            return "H";
        } else {
            return "T";
        }
        // return “H” or “T” depending on whether this.state is 0 or 1
    },
    toHTML: function () {
        const div = document.createElement("div");
        div.classList.add("coin");
        div.classList.add(this.toString().toLowerCase());
        return div;
        // set the properties of the image element to show either heads or tails
    }
};

function createHeader(string) {
    var header = document.createElement("h1");
    var textNode = document.createTextNode(string);
    header.appendChild(textNode);

    return header;
}

for (let x = 0; x < 20; x++) {

    coin.flip();
    container.appendChild( createHeader( coin.toString() ) );
    container.appendChild( coin.toHTML() );

}