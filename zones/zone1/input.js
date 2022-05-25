let inputdirection = {x:0, y:0}
let lastinputdir = {x: 0, y:0}

window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'w':
            break
        case 's':
            break
        case 'a':
            break
        case 'd':
            break

    }
})

export function getinputdirection(){
    lastinputdir = inputdirection
    return inputdirection
}
