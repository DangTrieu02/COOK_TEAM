import "reflect-metadata"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "social",
    synchronize: true,
    entities: ["dist/src/entity/*.js"],
})
export default AppDataSource;