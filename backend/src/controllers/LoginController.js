const conect = require('../database/conexao');

module.exports = {
    async create(request, response){
        const { username } = request.body;

        const user = await conect('users')
            .where('username', username)
            .select('*') //faz o login a partir do id da ong 
            .first();

        if (!user) {
            return response.status(400).json({ error: 'No user found with this username'})
        }

        return response.json(user);
    }
};