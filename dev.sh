#!/bin/bash
docker build -t p5-balls-image .
docker run -it --name p5-balls-container -p 8080:80 p5-balls-image
