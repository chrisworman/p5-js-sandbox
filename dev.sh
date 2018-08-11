#!/bin/bash

install() {
  docker build -t p5-js-sandbox-image .
}

start() {
  docker run -dit -v `pwd`/src:/usr/local/apache2/htdocs --name p5-js-sandbox-container -p 8080:80 p5-js-sandbox-image
}

stop() {
  docker stop p5-js-sandbox-container
  docker rm p5-js-sandbox-container
}

uninstall() {
  docker rmi p5-js-sandbox-image
}

if [ $1 = "install" ]; then
  install
elif [ $1 = "start" ]; then
  start
elif [ $1 = "stop" ]; then
  stop
elif [ $1 = "uninstall" ]; then
  uninstall
fi
