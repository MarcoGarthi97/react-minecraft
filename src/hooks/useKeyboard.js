import { useCallback, useEffect, useState } from "react"

function actionByKey(key) {
    const keyActionMap ={
        keyW: 'moveForward',
        keyS: 'moveBackward',
        keyA: 'moveLeft',
        keyD: 'moveRight',
        space: 'jump',
        digit1: 'dirt',
        digit2: 'grass',
        digit3: 'glass',
        digit4: 'wood',
        digit5: 'log',
    }
}

return keyActionMap[key]

export const useKeyboard = () => {
    const [actions, setMovement] = useState({
        moveForward : false,
        moveBackward : false,
        moveLeft: false,
        moveRight: false,
        jumb: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
    })

    const handleKeyDown = useCallback(() => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) => {
                return({
                    ...prev,
                    [actions]: true
                })
            })
        }
    }, [])

    const handleKeyUp = useCallback(() => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) => {
                return({
                    ...prev,
                    [actions]: false
                })
            })
        }
    }, [handleKeyDown, handleKeyUp])

    return actions

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return(() => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        })
    })
}