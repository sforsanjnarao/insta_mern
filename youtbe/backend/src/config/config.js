import dotenv from 'dotenv';
dotenv.config();

const _config={
    PORT: process.env.PORT,
    MONGOURL: process.env.MONGOURL,
    JWT: process.env.JWT
}
const config=Object.freeze(_config)

export default config;
