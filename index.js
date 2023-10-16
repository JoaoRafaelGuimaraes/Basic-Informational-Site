const http = require('http')
// what does http stand for and what does it do?
const fs = require('fs')

const path = require('path')

const port = 8080

const server = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type' : 'text/html'})

    let dirname = 'frontend'
    let filepath = path.join(dirname, req.url)

    if (req.url === '/') {
        filepath = path.join(dirname, 'index.html');
    } else if (req.url === '/about') {
        filepath = path.join(dirname, 'about.html');
    } else if (req.url === '/contact-me') {
        filepath = path.join(dirname, 'contact-me.html');
    } else {
        filepath = path.join(dirname, '404.html');
    } 


    fs.readFile(filepath, function(error, data){

        if(error){
            res.writeHead(404)
            res.write('Error: file not found  ')
        }else{

            res.write(data)
        }
        res.end()
    })

})   

server.listen(port, function(error){

    if(error){
        console.log('Somethig went wrong', error)
    }else{

        console.log('Server is listening on port ' + port)
    }
})