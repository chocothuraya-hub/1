// Environment variables with fallback to encoded values
// Decode function for base64
const decode = (str: string) => {
  if (typeof window === 'undefined') {
    return Buffer.from(str, 'base64').toString('utf-8');
  }
  return atob(str);
};

// Encoded credentials (base64)
const ENCODED = {
  DB_HOST: 'c3J2MjA1OC5oc3Rnci5pbw==',
  DB_PORT: 'MzMwNg==',
  DB_USER: 'dTg5OTU2MDAyOV9hZG0=',
  DB_PASSWORD: 'UXdlcnR5dWk0MzJA',
  DB_NAME: 'dTk5OTU1MDcyOV91ODk5NTYwMDI5X3RodQ==', // u999550729_u899560029_thu
  UPLOADTHING_TOKEN: 'c2tfbGl2ZV83NDQyNmFlN2E5OGQyYmU4Y2NjM2I0NDE4YTExNjNlOWY1MGVlZDM2N2YwZWIxYTllN2FlMTcxYmRjZWMwNjZk',
};

export const ENV = {
  DB_HOST: process.env.DB_HOST || decode(ENCODED.DB_HOST),
  DB_PORT: process.env.DB_PORT || decode(ENCODED.DB_PORT),
  DB_USER: process.env.DB_USER || decode(ENCODED.DB_USER),
  DB_PASSWORD: process.env.DB_PASSWORD || decode(ENCODED.DB_PASSWORD),
  DB_NAME: process.env.DB_NAME || decode(ENCODED.DB_NAME),
  UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN || decode(ENCODED.UPLOADTHING_TOKEN),
};
