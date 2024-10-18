// how to delete a property from an object
const este = {
    1: 'lucas',
    2: 'pablo'
}

const newObject = Object.entries(este).filter(item => item[0] !== '1')
const result = {}
newObject.forEach(item => {
    result[item[0]] = item[1]
})


// delete a property from object using destructuring
const object2 = {
    1: 'lucas',
    2: 'pablo',
}

const { ['2']: toDelete, ['1']: toDelete2, ...rest} = object2
const objectFiltered = rest
console.log(objectFiltered)

export const formatData = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
}

export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    }).format(price)
}