import admin from "../firebase.js";

async function verifyToken(request, reply, done) {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        reply.status(401).send({ error: "Unauthorized" });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        request.user = decodedToken;
        done();
    } catch (error) {
        console.log(error);
        reply.status(401).send({ error: "Unauthorized" });
    }
}

export default verifyToken;
