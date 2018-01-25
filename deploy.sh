#!/bin/bash
USERNAME="deployer"
HOST="104.41.29.178"
SCRIPT="docker pull felipebrizola/alias; docker run -t -d -p 3000:3000 felipebrizola/alias /bin/bash"
ssh $USERNAME@$HOST "${SCRIPT}"
