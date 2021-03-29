const conect = require('../database/conexao');

module.exports  = {
    async index (request, response) {
        const users = await conect('users').select('*');
    
        return response.json(users);
    },

    async create (request, response){

        const {username, name, email} = request.body;
        //const username = crypto.randomBytes(4).toString('HEX');
        
        await conect('users').insert({
            username,
            name,
            email,
        });

        return response.json({username});
    }
};