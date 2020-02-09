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
                console.log("elementos: ", board.elements.lenght);
                this.kind = "rectangle";
                console.log("hola contructormm");
                this.speed = 10;
            }
            //modificamos los elementos de una funcio con el prototype
            //además estamos incluyendo un json con funciones
        self.Bar.prototype = {
            down: function() {
                this.y += this.speed; //aumentar a la cordenada en y
            },
            up: function() {
                this.y -= this.speed;
            },
            toString: function() {
                return "x: " + this.x + "y: " + this.y;
            }
        }
    }
)();

(function() {
    self.Ball = function(x, y, radius, board) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed_y = 0;
        this.speed_x = 0;
        this.board = board;

        board.ball = this;
        this.kind = "circle";
    }
})();


(function() {
    self.BoardView = function(canvas, board) {
            this.canvas = canvas;
            this.canvas.width = board.width;
            this.canvas.height = board.height;
            this.board = board;
            console.log("board " + board.elements);
            this.ctx = canvas.getContext("2d");
            console.log("entrando a board vuew")
        }
        //dependiendo del elemento lo dibujará de una manera diferente
        //este elemento se obtendrá de self.bar

    self.BoardView.prototype = {
        clean: function() {
            this.ctx.clearRect(0, 0, this.board.width, this.board.height);
            console.log("entrando al boardvew");
        },
        draw: function() {
            console.log("entreo al protoryé");
            //console.log("# de elementos" + this.board.elements.lenght);
            //el error es que board.elements da null
            for (var i = this.board.elements.lenght - 1; i >= 0; i--) {
                var el = this.board.elements[i];
                // console.log("imprimiendo el:" + el);
                console.log("ingresando al protoitpo");
                draw(this.ctx, el);
            }
        },

        play: function() {
            this.board_view.clean();
            this.board_view.draw();

        }

    }


    function draw(ctx, element) {
        console.log("elemento: " + element);
        // if (elemnt !== null && element.hasOwnProperty("kind")) { //si no es nulo y que tenga una propiedad
        //kind
        console.log("hola mundo");
        switch (element.kind) {
            case "rectangle":
                ctx.fillRect(element.x, element.y, element.width, element.height);
                break;
            case "circle":
                ctx.beginPath();
                ctx.arc(element.x, element.y, element.radius, 0, 7);
                ctx.fill();
                ctx.closePath();
                break;
        }
        //}
    }

})();

var board = new Board(600, 400);
var bar = new Bar(20, 100, 40, 50, board);
var bar_2 = new Bar(735, 100, 40, 100, board);
var canvas = document.getElementById('canvas');
var board_view = new BoardView(canvas, board);
var ball = new Ball(350, 100, 10, board);


document.addEventListener("keydown", function(ev) {
    ev.preventDefault();
    console.log(ev.keyCode);
    if (ev.keyCode == 38) {
        bar.up();
    } else if (ev.keyCode == 40) {
        bar_2.up();
    } else if (ev.keyCode == 87) {
        //w
        bar.down();
    } else if (ev.keyCode == 83) {
        bar.down();
    }




    console.log(bar.toString());
});
//self.addEventListener("load", main);
window.requestAnimationFrame(controller);

function controller() {
    board_view.play();
    board_view.clean();
    board_view.draw();
    window.requestAnimationFrame(controller);
}