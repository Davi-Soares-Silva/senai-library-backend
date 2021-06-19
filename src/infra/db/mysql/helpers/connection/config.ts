import { DATABASE } from "@/utils/constants";

const libraryConfig = {
  client: DATABASE.DB_DIALECT,
  connection: {
    host: DATABASE.DB_HOST,
    port: +DATABASE.DB_PORT,
    user: DATABASE.DB_USERNAME,
    password: DATABASE.DB_PASSWORD,
    database: 'db_library',
    options: {
      encrypt: false,
      enableArithAbort: false,
    },
  },
};

export { libraryConfig };