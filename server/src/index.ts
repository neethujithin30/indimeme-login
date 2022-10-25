import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { Users } from "./Entities/Users";
import { Admin } from "./Entities/Admin";
// import { Categories} from "./Entities/categories";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "register",
    username: "root",
    password: "neethu123",
    logging: true,
    synchronize: true,
    entities: [Users],
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(3005, () => {
    console.log("server running on 3005");
  });
};

main().catch((err) => {
  console.log(err);
});
