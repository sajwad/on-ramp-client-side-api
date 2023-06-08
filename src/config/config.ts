require('dotenv').config()
import * as z from 'zod';

const envsSchema = z.object({
  NODE_ENV: z.enum(['production', 'development']),
  PORT: z.string().default('8080'),
  PRIVATE_KEY: z.string({ required_error: "Private key required for signing"}).nonempty(),
}).nonstrict();

const envVars = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
};

try {
  const validatedEnvs = envsSchema.parse(envVars);
  console.log(validatedEnvs);
} catch (error) {
  console.error('Error validating environment variables:', error);
}


// map env vars and make it visible outside module
export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  privateKey: envVars.PRIVATE_KEY,
};