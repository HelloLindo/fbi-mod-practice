# fbi-practice with fbi-project-mod

A practice about user management moddleware which uses `fbi-project-mod` and it works with `fbi-project-vue`.

This node service base on Koa 2.

> This is an fbi project template. If you haven't installed
> [fbi](https://github.com/AlloyTeam/fbi) yet, use the following command to
> install.
>
> `$ npm i -g fbi` or `yarn global add fbi`

## Requirements

- `fbi v3.0+`
- `node v7.6+`

## Features

- Using Koa2 to build the APIs
- Providing api for users to pull some user datas (Each data is generated randomly)
- Providing api for users to edit user data (Virtually operation)
- Providing api for users to remove user data (Virtually operation)

## Usage

1. **Show available tasks**

   ```bash
   $ fbi ls
   ```

2. **Run a task**

   ```bash
   $ fbi s   # Start dev server
   $ fbi b   # Build the project for the specified environment
   ```

3. **Debug in VSCode**

   ```bash
   # 1. Start dev server
   $ fbi s

   # 2. Attach existing process:
   Press `F5` in VSCode (support breakpoints in `src`)
   ```

- **Update template**

  ```bash
  $ fbi up mod
  ```

- **Update project**

  ```bash
  $ cd path/to/my-app
  $ fbi use vx.x.x  # use `fbi ls store` to check versions
  ```

- **Update options**

  ```bash
  $ cd path/to/my-app
  $ fbi init -o
  ```

## Test

```bash
$ curl -i http://localhost:3000/api/pullUsers?num_of_users=12
```

## Run the project in a production environment

```bash
$ npm start
```

## Tasks

### `serve`

- Description: Compile and start development server.
- Params:
  - `d` `{Boolean}` 'watch only' mode.
- Alias: `s`
- Examples:
  - `fbi s`
  - `fbi s -d`

### `build`

- Description: Build the project for the specified environment.
- Params:
  - `p/prod` `{Boolean}` (default) Production environment.
  - `t/test` `{Boolean}` Test environment.
- Alias: `b`
- Examples:
  - `fbi b -t`
  - `fbi b -p`

## Need file packaging?

check out [fbi-task-pack](https://github.com/fbi-templates/fbi-task-pack)

## More

- [Official templates](https://github.com/fbi-templates)
- [fbi documentation](https://neikvon.gitbooks.io/fbi/content/)

## License

[MIT](https://opensource.org/licenses/MIT)

