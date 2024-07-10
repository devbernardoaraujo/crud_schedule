import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from './routes/user.routes';
import { contactsRoutes } from './routes/contact.routes';
const app: FastifyInstance = fastify({ logger: true }); //logger para dar mais informações no console

app.register(userRoutes, {
    prefix: '/users', 
});
app.register(contactsRoutes, {
    prefix: '/contacts', 
});

app.listen({
    port: 3100,
 }, 
 ()=> console.log('Server is running on port 3100'),
);