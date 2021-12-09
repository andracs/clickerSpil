
docker run --name repo alpine/git clone https://github.com/docker/getting-started.git
docker build -t docker101tutorial .
docker run -d -p 80:80 --name docker-tutorial docker101tutorial
docker tag docker101tutorial easj/docker101tutorial 
docker push easj/docker101tutorial
https://hub.docker.com/repositories
http://localhost/tutorial/ 