export class EventsManager{

    keysPressed = new Set();

    #movementX = 0;
    #movementY = 0;

    leftClick = false;
    rightClick = false;
    middleClick = false;

    constructor(canvas){
        document.addEventListener('keydown', (event) => {
            this.keysPressed.add(event.code);
        });       

        document.addEventListener('keyup', (event) => {
            this.keysPressed.delete(event.code);
        });


        canvas.addEventListener('click', () => {
            canvas.requestPointerLock();
        });

        document.addEventListener('mousedown', function(event) {
            const button = event.button;

            switch (button) {
                case 0:
                    this.leftClick = true;
                    break;
            
                case 1:
                    this.middleClick = true;
                    break;
                
                case 2:
                    this.rightClick = true;
                    break;
            }
        }.bind(this));

        document.addEventListener('mouseup', function(event) {
            const button = event.button;

            switch (button) {
                case 0:
                    this.leftClick = false;
                    break;
            
                case 1:
                    this.middleClick = false;
                    break;
                
                case 2:
                    this.rightClick = false;
                    break;
            }
        }.bind(this));

        document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === canvas) {
            document.addEventListener('mousemove', this.#onMouseMove, false);
        } else {
            document.removeEventListener('mousemove', this.#onMouseMove, false);
        }
        });
    }
    #onMouseMove = (event) => {
        this.#movementX = event.movementX || 0;
        this.#movementY = event.movementY || 0;
    }

    getMovementX(){
        let mvX = this.#movementX;
        this.#movementX = 0;
        return mvX;
    }

    getMovementY(){
        let mvY = this.#movementY;
        this.#movementY = 0;
        return mvY;
    }
}

/*
window.onbeforeunload = function (event) {
  // Lógica opcional, como salvar estado
  event.preventDefault(); // Necessário em alguns navegadores

  event.returnValue = ''; // Necessário para disparar o aviso

  // Alguns navegadores usam esse valor para exibir uma caixa de confirmação
  return '';
};
*/