FROM alpine
RUN apk add --no-cache --upgrade bash openssh
COPY ./proxy.pem /usr/src/proxy.pem
COPY ./command.sh /usr/src/command.sh
RUN chmod +x /usr/src/command.sh
RUN chmod 600 /usr/src/proxy.pem
CMD ["sh", "/usr/src/command.sh"]
