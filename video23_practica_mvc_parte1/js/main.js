(function() { //funcion anónima
    self.Board = function(width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }

    self.Board.prototype = {
        get elements() {
            var elements = this.bars;
            elements.push(this.ball);
            return elements;
        }
    }

})();

//segundo video
(
    function() {
        self.Bar = function(x, y, width, height, board) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.board = board;
                this.board.bars.push(this); //accedo al board, accedo al bpard y le agrego este objeto
                this.kind = "rectangle";
                console.log("hola contructormm");
            }
            //modificamos los elementos de una funcio con el prototype
            //además estamos incluyendo un json con funciones
        self.Bar.prototype = {
            down: function() {

            },
            up: function() {

            }
        }
    }
)();

(function() {
    self.BoardView = function(canvas, board) {
            this.canvas = canvas;
            this.canvas.width = board.width;
            this.canvas.height = board.height;
            this.board = board;
            this.ctx = canvas.getContext("2d");
            console.log("entrando a board vuew")
        }
        //dependiendo del elemento lo dibujará de una manera diferente
        //este elemento se obtendrá de self.bar

    self.BoardView.prototype = {
        draw: function() {
            for (var i = this.board.elements.lenght - 1; i >= 0; i--) {
                var el = this.board.elements[i];
                console.log("ingresando al protoitpo");
                draw(this.ctx, el);
            }
        }

    }

    function draw(ctx, element) {
        console.log("elemento: " + element);
        if (elemnt !== null && element.hasOwnProperty("kind")) { //si no es nulo y que tenga una propiedad
            //kind
            console.log("hola mundo");
            switch (element.kind) {
                case "rectangle":
                    ctx.fillRect(element.x, element.y, element.width, element.height);
                    break;
            }
        }
    }

})();

window.addEventListener("load", main);

function main() {

    var board = new Board(800, 400);
    var bar = new Bar(20, 100, 40, 50, board);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas, board);
    board_view.draw();
}