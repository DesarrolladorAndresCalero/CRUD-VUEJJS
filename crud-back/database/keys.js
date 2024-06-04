import { Pool } from "pg";

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    password: 'admin1234',
    database: 'bdcliente'
})