#!/bin/bash
USERNAME="deployer"
HOST="104.41.29.178"
SCRIPT="docker pull felipebrizola/alias; docker run -p 3000:3000 felipebrizola/alias"
ssh $USERNAME@$HOST "${SCRIPT}"
