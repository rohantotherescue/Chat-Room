### How to run it?
1) build the image from given Dockerfile using the command `docker build -t <image_name> <relative path of the Dockerfile>`. Or pull this image from dockerhub: [here](https://hub.docker.com/layers/rohantotherescue/chat-room/v1.0/images/sha256-d6b8ecb1996f11219a8f63b056b447411de440fe94729bfbec0498ac0c36c7b7?context=repo)
2) Run the server on local machine: `node server.js`  This would up the server which listens on port 3000.
3) Spawn the container, by port mapping it to your desired port, here I have used port 8000: `docker run -p 8000:3000 meme-server`
4) send messages to each other
