import jsonwebtoken from "jsonwebtoken";

/**
 * Generate new jwt token
 * @param {object} payload
 * @param {string} JWT_SECRET_KEY
 * @param {number} JWT_EXPIRES_IN_MINUTE
 * @returns {Promise<string>} return promise with token
 */
export const generateToken = (payload, JWT_SECRET_KEY, JWT_EXPIRES_IN_MINUTE) =>
    new Promise((resolve, reject) => {
        jsonwebtoken.sign(
            payload,
            JWT_SECRET_KEY,
            { expiresIn: JWT_EXPIRES_IN_MINUTE * 60 },
            (err, token) => {
                if (err) return reject(err);
                return resolve(token);
            }
        );
    });

/**
 * Check token validity and get decoded value
 * @param {string} token
 * @param {string} JWT_SECRET_KEY
 * @returns {object} decoded value from token payload
 */
export const compareToken = (token, JWT_SECRET_KEY) =>
    new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, JWT_SECRET_KEY, (err, decoded) => {
            if (err) return reject(err);
            return resolve(decoded);
        });
    });

const main = async () => {
    const JWT_SECRET_KEY = "s key";
    const token = await generateToken({ foo: "bar" }, JWT_SECRET_KEY, 40);
    console.log("token: ", token);

    const payload = await compareToken(token, JWT_SECRET_KEY);
    console.log("decoded payload", payload);
};

main();
