import { StepInTheBuildPipeline } from './build';
import { RunTest } from './test';
const SCHEMA_FILE_NAME = "./example1/schema-example1.json";


// "Parse" command line

const doBuild = process.argv.includes("--build");
const forceGenerate = process.argv.includes("--force");
const doTest = process.argv.includes("--test");

// Build?

if (doBuild)
    if (!StepInTheBuildPipeline(SCHEMA_FILE_NAME, forceGenerate))
        console.log(doTest ? "Cannot run tests, source files has changed" : "Build completed without any changed files.");
    else
        console.log("Already up do date");


// Test?

if (doTest) {
    RunTest(SCHEMA_FILE_NAME);
    console.log("Note: If this is the first run, and the test failed - that's by design. :)");
}

