


const isAdmin = true




function soloAdmin(req, resp, next){
    if(!isAdmin){
        return 'no es admin'
    }else{
        next()
    }
}



module.exports = {soloAdmin}
