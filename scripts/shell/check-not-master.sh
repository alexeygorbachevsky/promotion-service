# #!/bin/bash

if [ "$(git rev-parse --abbrev-ref HEAD)" = "master" ] || [ "$(git rev-parse --abbrev-ref HEAD)" = "main" ]; then
    echo "\033[31mDon't commit/push to master/main"
    exit 1
fi

 exit 0
