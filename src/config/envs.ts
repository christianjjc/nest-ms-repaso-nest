import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);
const { error, value } = envsSchema.validate(process.env);
if (error) {
  throw new Error(`Config Validation Error: ${error.message}`);
}

const envVars: EnvVars = value;

// console.log({ envVars });
export const envs = {
  port: envVars.PORT,
};
