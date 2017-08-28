## Deploy
on DigitalOcean using systemctl 

En el directorio lib/systemd/system/ estan los servicios. Para crear un nuevo servicio
se crea un archivo con extension .service con la siguiente estructura
```sh
[Unit]
Description=MH Service
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root
ExecStart=/root/myApps/mh/bin/start
Restart=on-abort

[Install]
WantedBy=multi-user.target
```
El direcotorio debe tener un ejecutable en la una carpeta bin con los permisos chmod +x
en este caso

```sh
#!/bin/bash
/root/.node/bin/node /root/.node/lib/node_modules/serve/bin/serve -s /root/myApps/mh/build
```

Para compilar desde react-scripts se de usar el comando npm run build

Para habilitar el serviciost
systemctl enable mh

Para iniciar
systemctl start mh

Para chequear el estado
systemctl status mh

Hasta este punto lo que logramos es iniciar el servidor en producción en el puerto 5000 (que es que usa el servidor serve por defecto. Para usar otro puerto deberiamos especificarlo -p en el bin/star)

Para apuntar un subdominio a localhost:5000 usaremos nginx

## NginX
Crearemos un sitio en la carpeta de nginx
/etc/nginx/sites-available
usaremos un nombre como el de la URL ej: mh.ceibo.co

```
# Virtual Host configuration for example.com

# You can move that to a different file under sites-available/ and symlink that
# to sites-enabled/ to enable it.

server {
	listen 80;
	listen [::]:80;

	server_name mh.ceibo.co;
	location / {
	proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;	
	}
}
```
Con este archivo logramos que lo que entre por el puero default 80 bajo el dominio mh.ceibo.co sea redirigido a localhost:5000

Solo queda hacer un symlink desde este archivo a sites-enabled

ln -s /etc/nginx/sites-available/mh.ceibo.co /etc/nginx/sites-enabled/mh.ceibo.co

Y por último reiniciamos nginx con 
service restart nginx 
o
systemctl restart nginx