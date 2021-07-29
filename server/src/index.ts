import express from 'express';
import {graphqlHTTP} from "express-graphql";
import cors from 'cors';
import {createConnection} from "typeorm";
import {student} from "./entities/student";
import {user} from './entities/user';
import {schema} from './schema';

const main = async () => {

  await createConnection({
    type: "mysql",
    database: 'career_fair_2021',
    username: 'root',
    password: '',
    logging: true,
    synchronize: false,
    entities:[student,user]
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
  }))
  app.listen(3001, () => {
    console.log("server running in port 3001");
  });
}

main().catch((err) => {
  console.log(err);
});