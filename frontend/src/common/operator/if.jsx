import React from 'react'

export default props => {
    // Se props.test for verdadeiro, retorna o filho..
    if(props.test) {
        return props.children
    } else {
        return false
    }
}