import { writeFile } from 'fs';
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
// Load node modules
import { magenta, grey } from 'colors';
import { config } from 'dotenv';

config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
   test: '${process.env.NX_TEST}',
};
`;

console.log(magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(grey(envConfigFile));

writeFile(targetPath, envConfigFile, (err) => {
   if (err) {
       throw console.error(err);
   } else {
       console.log(magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});
