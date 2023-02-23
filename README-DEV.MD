# Development notes

Run `docker-compose up -d` to start the teletron environment. The contents of this folder
will be mounted onto `/build-extension` inside the container.

## Updating

Run the commands below to clone the magic mirror repository and copy the sources files for the module.

```bash
rm -rf ./mm-clock/*.*
mkdir /tmp/mm-clone
cd /tmp/mm-clone
git clone --depth 1 git@github.com:MichMich/MagicMirror.git .
cd -
mkdir mm-clock
cp -R /tmp/mm-clone/modules/default/clock/* ./mm-clock
rm -rf /tmp/mm-clone
```

Manually update the `clock.js` file to do a not-strict comparison on `timeFormat`, e.g.:

`if (this.config.timeFormat !== 24) {` => `if (this.config.timeFormat != 24) {`

This is because the _enum_ field type in Teletron is a string, while the module expects a number.

## Rebuild

Run the following to rebuild the teletron container and restart:

    docker-compose rm -f teletron && docker-compose build && docker-compose up
