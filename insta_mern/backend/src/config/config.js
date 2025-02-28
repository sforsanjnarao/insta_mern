const _config={
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    JWT: process.env.JWT
}

const config=Object.freeze(_config)  //this makes _config immutable

module.exports=config