import {GraphQLID, GraphQLInt, GraphQLList, GraphQLString} from "graphql";
import {event} from "../../entities/event";
import {AdvertisementType} from "../typeDef/advertisement";
import {createQueryBuilder} from "typeorm";

export const GET_ALL_ADVERTISEMENTS = {
  type:new GraphQLList(AdvertisementType),
  async resolve() {

    const query = createQueryBuilder('advertisement')
      .select('advertisement.ad_id','ad_id')
      .addSelect('advertisement.description','description')
      .addSelect('advertisement.category','category')
      .addSelect('advertisement.image','image')
      .addSelect('advertisement.status','status')
      .addSelect('c.com_name','com_name')
      .addSelect('c.com_id','companyComId')
      .addSelect('e.event_code','event_code')
      .addSelect('e.id','eventId')
      .innerJoin('event', 'e', 'advertisement.eventId = e.id') //INNER JOIN table2 t2 ON t1.id = t2.id
      .innerJoin('company', 'c', 'advertisement.companyComId = c.com_id') // INNER JOIN table3 t3 ON t2.event = t3.event
      .getRawMany()
    return await query;
    // console.log(result);
  }
}