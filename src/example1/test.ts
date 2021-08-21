import * as dancevalidator from "./models/validatedances";
import * as dances from './models/dances';
import { LoadSchemaFile } from 'runtime-typescript-checker';

export function RunTest(iSchemaFileName: string): void {

    // ****************************************
    // * Load schema from filesystem
    // ****************************************

    const schema = LoadSchemaFile(iSchemaFileName);
    if (!schema)
        throw Error("Schema not found");

    // Load the JSON schema and use it to enable runtime checking
    dancevalidator.Configure(schema);

    // *****************************************
    // Testing payload from "unknown" source
    // *****************************************

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

    // *****************************************
    // * TypeGuard example
    // *****************************************

    // TypeGuard test
    if (dancevalidator.IsDancerInterface(testPayload))
        console.log("Typeguard Test: Success.");
    else
        console.log("Typeguard Test: Payload is not valid");

    console.log("---------------");

    // *****************************************
    // * Validate payload example
    // *****************************************

    const validateResult = dancevalidator.ValidateDancerInterface(testPayload);
    if (validateResult.Success)
        console.log("Validate Test: Success");
    else {
        console.log(`Validate Test: Payload is not valid. Error=${validateResult.Error}`);
        console.log(JSON.stringify(validateResult.Errors, null, 4));
    }

}