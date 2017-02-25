var mongo = {
    development: {
        connectionString: 'mongodb://<dbuser>:<dbpassword>@ds157439.mlab.com:57439/products'
    },
        production: {
            connectionString: 'mongodb://<dbuser>:<dbpassword>@ds157439.mlab.com:57439/products'
        }
}

module.exports = 
    mongo;