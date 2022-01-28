const db = require('../../db-config')

module.exports = {
    getAll,
    getByID,
    make
}

function getAll(){
    return db('celebs')
}

function getByID(id){
    return db('celebs')
        .where('celebs_id', id)
        .first()
}

async function make(celeb){
    return db('celebs')
        .insert(celeb)
        .then(id => {
            return getByID(id)
        })
}