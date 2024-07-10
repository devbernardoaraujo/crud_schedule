import { FastifyInstance } from "fastify";
import { UserUsecase } from "../usecases/user.usecase";
import { UserCreate } from "../interfaces/users.interface";

export async function userRoutes(fastify: FastifyInstance){
    const userUsecase = new UserUsecase()
    fastify.post<{Body: UserCreate}>('/', async (req, reply) => {
        const {name, email} = req.body
        try {
            const data = await userUsecase.create({
                name,
                email
            });
          return reply.send(data)  
        } catch (error) {
            reply.send(error)        
        }
    });
    fastify.get('/', (req, reply) => {
        reply.send({hello: 'world'});
    });
}