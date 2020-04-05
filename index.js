const PORT = process.env.PORT || 8500;
const server = require('./server');

server.listen(PORT, (req,res) => {
   console.log(`App is up and running at https://localhost:${PORT}`);
})
