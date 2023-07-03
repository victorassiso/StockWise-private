import { ZodError } from "zod";
import { env } from "../config/config-env.js";
export const errorHandler = (error, req, res, next) => {
  if (error instanceof ZodError) {
    return res
      .status(400)
      .send({ message: "validation error.", issues: error.format() });
  }

  if (env.NODE_ENV != "production") {
    console.error(error);
  } else {
    // TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return res.status(500).send({ message: "Internal server error." });
};
