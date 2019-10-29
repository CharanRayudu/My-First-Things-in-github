import socket as socks
HOST='127.0.0.1'
PORT=8080
listenSocket=socks.socket(socks.AF_INET,socks.SOCK_STREAM)
listenSocket.bind((HOST,PORT))
listenSocket.listen(2)
connection , address=listenSocket.accept()
request=connection.recv(1024)
while True:
    connection.sendall("""HTTP/1.1 200 OK
    Content-type:text/html 


    <html>
    <head>
    <title>My Web Server</title>
    </head>
    <body>
    <h1>Heyya There!!</h1>
    </body>
    </html>""")
connection.close()
