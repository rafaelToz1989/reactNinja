'use strict'

const map = (arr = [], func = (item) => item) => {
    let count = 0
    return (function mapInternal(arrayInternal)  {
        if (arrInternal.length === 0) {
            return []
        }

        const [head, ...tail] = arrInternal
        return [func(head, count++, arr)].concat(mapInternal(tail, func))
    })(arr)
}

export default map