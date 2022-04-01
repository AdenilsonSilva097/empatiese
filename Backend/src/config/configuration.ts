interface Configuration {
  mongoConnectionString: string;
}

export default (): Configuration => ({
  mongoConnectionString: process.env.MONGO_CONNECTION_STRING || '',
});
