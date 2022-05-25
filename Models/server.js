const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.productsPath= '/api/products'
        //Middlewares
        this.middlewares()
        
         //Routes Application
        this.routes()
    }

    middlewares() {
        //CORS 
        this.app.use( cors())
        
        // Lectura y parseo del Body
        this.app.use( express.json() )
        
        //Directorio Público
        this.app.use(express.static('public'))


    }
    

    routes() {
    
        this.app.use( this.productsPath, require('../routes/products.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
                console.log('Servidor escuchando en puerto', this.port)    
        })

    }
 
}

module.exports = Server