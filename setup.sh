#!/bin/bash
touch .env
printf 'BOT_TOKEN=abc123' > .env
npm i
npm i -g eslint
eslint --init