import z from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
});

const envParse = envSchema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
});

if (!envParse.success) {
  throw new Error("Error env validation");
  process.exit(1);
}

type TENV = z.infer<typeof envSchema>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends TENV {}
  }
}
