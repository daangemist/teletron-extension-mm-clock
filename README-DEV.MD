# Development notes

Run `docker-compose up -d` to start the teletron environment. The contents of this folder
will be mounted onto `/build-extension` inside the container.

## Updating

Run the commands below to clone the

```bash
rm -rf ./mm-clock/*.*
mkdir /tmp/mm-clone
cd /tmp/mm-clone
git clone --depth 1 git@github.com:MichMich/MagicMirror.git .
cd -
cp -R /tmp/mm-clone/modules/default/clock/* ./mm-clock
rm -rf /tmp/mm-clone
```

## Rebuild

Run the following to rebuild the teletron container and restart:

    docker-compose rm -f teletron && docker-compose build && docker-compose up
