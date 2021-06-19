import knex from "knex";
import { libraryConfig } from "./config";

export const library = knex(libraryConfig);