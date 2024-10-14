DOCKER_USERNAME ?= itirina
APPLICATION_NAME ?= todo-list-app
VERSION = 1.0.0

build:
	docker build -t ${DOCKER_USERNAME}/${APPLICATION_NAME}:${VERSION} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}:${VERSION}

run: stop build
	docker run -d --name=${DOCKER_USERNAME}-${APPLICATION_NAME} --init -p 5173:80 \
 	${DOCKER_USERNAME}/${APPLICATION_NAME}:${VERSION}

stop:
	docker rm -f ${DOCKER_USERNAME}-${APPLICATION_NAME} || true

logs:
	docker logs ${DOCKER_USERNAME}-${APPLICATION_NAME}

clean: stop
	docker rmi ${DOCKER_USERNAME}/${APPLICATION_NAME}:${VERSION} || true