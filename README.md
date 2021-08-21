# typescript-json-schema-validate

This package demonstates the [runtime-typescript-checker](https://www.npmjs.com/package/runtime-typescript-checker) project.

## TL;DR

 ```cmd
 cd src
 node.exe -r ts-node/register ./example1/index.ts --build --force --test
 ```

## TypeScript interfaces and the payload

`Example1` contains the following example types and interfaces:

```typescript
export interface DancerInterface {
  Name: string;
  Role: eRole,
  HasPaid: "Yes" | "No",
  DanceClass: DanceClass,
  Notes?: string,
  MemberShip: boolean
}

export enum eRole {
  Leader = 1,
  Follower = 2,
  Both = 3
}

export type DanceClass = {
  ID: string,
  Name: string,
  Level: "A" | "B" | "C" | "D" | "E"
}
```

With the included test payload, we can clearly see there are several issues. For example, the `HasPaid` field can only be `"Yes" | "No"`:

```typescript
    const testPayload = {
        Name: "Tomas",
        HasPaid: "Maybe",
        Role: dances.eRole.Leader,
        DanceClass: {
            ID: "7",
            Name: "Lindy Hop Autumn",
            Level: "?",
        },
        Notes: undefined,
        MemberShip: true
    };
```

This payload will render the following error:

```json
[
    {
        "instancePath": "/HasPaid",
        "schemaPath": "#/properties/HasPaid/enum",
        "keyword": "enum",
        "params": {
            "allowedValues": [
                "No",
                "Yes"
            ]
        },
        "message": "must be equal to one of the allowed values"
    },
    {
        "instancePath": "/DanceClass/Level",
        "schemaPath": "#/properties/DanceClass/properties/Level/enum",
        "keyword": "enum",
        "params": {
            "allowedValues": [
                "A",
                "B",
                "C",
                "D",
                "E"
            ]
        },
        "message": "must be equal to one of the allowed values"
    }
]
```

## Run from vscode

Press `F5` or `ctrl-shift-p` and find the `Debug: Select and start debugging`.

The `launch.json` is configured to run the Build and Test step.

## Build

To (re)generate the `validatedances.ts` file, run:

```cmd
npm run build-example1 
```

Note! The `runtime-typescript-checker` will avoid to regenerate any file if it can, but there is an option `--force`.

```cmd
npm run build-example1 --force
```

## Build result

The schema is generated as `schema-example1.json`. It's this file that's used in runtime.

The tests are generated from the source file `dances.ts` to `validatedances.ts`. The naming can be changed, see the `Prefix` and `Suffix` settings.

## Using the tests

```cmd
npm run test-example1
```

## Force build and test:

There isn't any `npm` command for that, use this:

```cmd
cd src
node.exe -r ts-node/register ./example1/index.ts --build --force --test
```

## More information

Check out [runtime-typescript-checker](https://www.npmjs.com/package/runtime-typescript-checker)

Enjoy :)

/T


