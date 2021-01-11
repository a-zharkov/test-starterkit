#!/bin/sh

echo "Start proxy script"

SERVER_IP='52.32.111.97'
SSH_ARGS='-o TCPKeepAlive=yes -o ServerAliveInterval=10 -o ServerAliveCountMax=5 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no'

cd /usr/src/
ssh -nNT $SSH_ARGS -R 0.0.0.0:$PROXY_SSH_PORT:nginx:8080 $PROXY_SSH_USERNAME@$SERVER_IP -i ./proxy.pem

echo "Done"
