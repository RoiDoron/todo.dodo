
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'todoDB'

export const todoService = {
    query,
    getById,
    save,
    remove,
    getEmptyTodo,
    getDefaultFilter
}

function query() {
    return storageService.query(STORAGE_KEY)
        .then(todos => {
            // if (!filterBy.txt) filterBy.txt = ''
            // if (!filterBy.maxPrice) filterBy.maxPrice = Infinity
            // const regExp = new RegExp(filterBy.txt, 'i')
            // return todos.filter(todo =>
            //     regExp.test(todo.vendor) &&
                // todo.price <= filterBy.maxPrice
            // )
            return todos
        })
}

function getById(todoId) {
    return storageService.get(STORAGE_KEY, todoId)
}

function remove(todoId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, todoId)
}


function save(todo) {
    if (todo._id) {
        return storageService.put(STORAGE_KEY, todo)
    } else {
        // when switching to backend - remove the next line
        todo.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, todo)
    }
}

function getEmptyTodo() {
    return {
        txt,
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}

function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))


