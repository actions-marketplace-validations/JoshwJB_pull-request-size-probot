# pr-size-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app for adding size labels to PRs

## Setup

```sh
# Install dependencies
yarn install

# Run the bot
yarn start
```

## Docker

```sh
# 1. Build container
docker build -t pr-size-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> pr-size-bot
```

## Contributing

If you have suggestions for how pr-size-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 Joshua William John Barber