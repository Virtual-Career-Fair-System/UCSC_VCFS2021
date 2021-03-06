import express from 'express';
import {graphqlHTTP} from "express-graphql";
import cors from 'cors';
import {createConnection} from "typeorm";
import {student} from "./entities/student";
import {user} from './entities/user';
import {schema} from './schema';
import {company} from "./entities/company";
const { graphqlUploadExpress } = require("graphql-upload");
import {event} from "./entities/event";
import { send_email } from './entities/send_email';
import { adpublish } from './entities/adpublish';
import {advertisement} from "./entities/advertisement";
import { cvupload } from './entities/cvupload';

const main = async () => {

  await createConnection({
    type: "mysql",
    database: 'career_fair_2021',
    username: 'root',
    password: '',
    logging: true,
    synchronize: false,
    entities:[student,user,company,event,send_email,adpublish,advertisement,cvupload]
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/graphql",  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),graphqlHTTP({
    schema,
    graphiql:true
  }));
  app.listen(3001, () => {
    console.log("server running in port 3001");
  });
}

main().catch((err) => {
  console.log(err);
});