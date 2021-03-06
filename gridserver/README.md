# Aquarius Grid Server

Aquarius service area division server

## Development

1. Clone the repo
1. Run `yarn` to install dependencies.
1. Create a .env file using the example file: `cp .env.example .env`
1. Populate the .env file.

These scripts can then be used:

```bash
$ yarn start # Starts the server, which listens on port 3000
$ yarn watch # Restarts server process when a source file is changed. For use during development
$ yarn lint # Runs ESLint
```

## REST Endpoints

### `/grid/id/:lat/:long`

Returns a grid ID for a client positioned at the provided geographical latitude and longitude.

Example output:

```json
{
   "lat":"37.7757",
   "long":"-122.4180",
   "grid_id":"32"
}
```

Note: The above-mentioned REST endpoint utilizes an API. For security reasons,
we have not uploaded the key. If you are testing the application, please feel
free to contact __Joel__ (@Jzerox2) on telegram to obtain the key.
