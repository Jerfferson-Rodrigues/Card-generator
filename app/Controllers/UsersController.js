import User from '../Models/User'

const UsersController = {
    getCommcepters: function (request, reply) {
        let user = new User()
        let commcepters = user.getAllCommcepters()
        reply.send(commcepters)
    },
    getCommcepter: function (request, reply) {
        let user = new User()
        let commcepter = user.getCommcepter(request.params.commcepter_id)
        if(commcepter){
            reply.send(commcepter)
        }else{
            reply.status(400)
            reply.send({
                message: "Invalid commcepter id."
            })
        }
        
    }
}

export default UsersController