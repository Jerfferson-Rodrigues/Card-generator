import User from '../Models/User'
import VCard from '../Models/VCard'

const VCardController = {
    generateQRCodeForCommcepter: async (request,reply) => {
        let user = new User()
        let vcard = new VCard()
        let commcepter = user.getCommcepter(request.params.commcepter_id)
        if(commcepter){
            let opts = {
                color: {
                    dark: (request.query && request.query.color) ? request.query.color : "#000000", 
                    light: '#FFFFFF'
                }
            }
            let vcardBuffer = await vcard.generateQRCodeBuffer(commcepter, opts)
            reply.type('image/png')
            reply.send(vcardBuffer)
        }else{
            reply.status(400)
            reply.send({
                message: "Invalid commcepter id."
            })
        }

    },
    generateQRCodeFromNewData: async (request, reply) => {
        let vcard = new VCard()
        let profile = {
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            cellphone: request.body.cellphone,
            email: request.body.email,
            company: request.body.company,
            title: request.body.title,
            street: request.body.street,
            city: request.body.city,
            state: request.body.state           
        }

        let opts = {
            color: {
                dark: (request.body && request.body.color) ? request.body.color : "#000000", 
                light: '#FFFFFF'
            }
        }

        let vcardBuffer = await vcard.generateQRCodeBuffer(profile, opts)
        reply.type('image/png')
        reply.send(vcardBuffer)
    }
}
export default VCardController