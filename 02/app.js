document.addEventListener(
    'DOMContentLoaded',
    () => {
        const divElement = document.querySelector('div')

        divElement.addEventListener(
            'mousemove',
            (e) => {
                console.log('Mouse Move X: ', e.layerX, 'Y: ', e.layerY)
            }
        )

        divElement.addEventListener(
            'mouseleave',
            () => {
                console.log('Mouse leave')
            }
        )
    }
)



