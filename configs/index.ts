import { IConfigEnv } from "./type";

const NEXT_PUBLIC_APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || 'local'
const config:IConfigEnv = require(`./${NEXT_PUBLIC_APP_ENV}.json`);

export { config };