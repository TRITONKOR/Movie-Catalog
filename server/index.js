import fastifyCors from '@fastify/cors';
import dotenv from 'dotenv';
import Fastify from 'fastify';


dotenv.config();

const fastify = Fastify({ logger: true });

const API_KEY = process.env.TMDB_API_KEY;

fastify.register(fastifyCors, {
    origin: '*',
})

fastify.get('/movies/search', async (request, reply) => {
    const { title } = request.query;

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`);
        const data = await response.json();
        reply.send(data);
    } catch (error) {
        reply.code(500).send({ error: 'Failed to fetch data from external API' });
    }
});

fastify.get('/discover/movie', async (request, reply) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
        const data = await response.json();
        reply.send(data);
    } catch (error) {
        reply.code(500).send({ error: 'Failed to fetch data from external API' });
    }
});

fastify.get('/movie/:id', async (request, reply) => {
    const { id } = request.params;

    try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch data from external API");
        }

        const data = await response.json();
        console.log(data);

        return reply.send(data);

    } catch (error) {
        console.error(error);
        if (!reply.sent) {
            reply.code(500).send({ error: 'Failed to fetch data from external API' });
        }
    }
});

fastify.listen({ port: 3001, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server running at ${address}`);
});
