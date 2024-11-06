import admin from "firebase-admin";
import serviceAccount from "./movie-catalog-firebase-token.json" assert { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

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
