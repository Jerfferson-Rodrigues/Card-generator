import commcepters from '../../db/commcepters'

class User{
    getAllCommcepters(){
        return commcepters.data
    }
    getCommcepter(id){
        return commcepters.data.find(e => e.id == id )
    }
}

export default User