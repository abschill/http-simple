# HTTPuppy - Documentation

## Configuration

In the root you want to run your server in, create a `http.puppy` file. It follows .ini format, so you can add key value pairs as such to organize your properties. The important one for now is the `config` key, which roughly maps to your [`HTTPuppyServerOptions`](https://github.com/abschill/httpuppy/blob/main/docs/interfaces/types_server.HTTPuppyServerOptions.md) configuration object if you are using the library itself.


In the [base](https://github.com/abschill/httpuppy/blob/main/http.puppy) of the repository you will find an example configuration, the alternative being inline flags that map to the correct keys when stripped of their prefixed `--`. The exception is the static option `path` is just aliased to the top level of the file-based config.

For example

```
npx httpuppy
```

is equal to having this in your config

```ini
[config]
port = 3000
```

which is equal to using this configuration inline for the library


```js
import { useServer } from 'httpuppy'

const app = useServer({
	port: 3000
});
```

you can set a custom path for the config file by adding argument in the format `npx httpuppy <path>`


## json/yml configuration

you can also configure your file to be in json/yml, which directly maps to the config structure, and needs no sort of mental difference in mapping. When you run `npx httpuppy` you will be greeted with a menu that gives you a list of options of valid config options that it detected, so just choose the one you want.

[json example](/httpuppy.json)
[yaml example](/httpuppy.yml)