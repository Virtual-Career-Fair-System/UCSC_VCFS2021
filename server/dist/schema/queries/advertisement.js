"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_ADVERTISEMENTS = void 0;
const graphql_1 = require("graphql");
const advertisement_1 = require("../typeDef/advertisement");
const typeorm_1 = require("typeorm");
exports.GET_ALL_ADVERTISEMENTS = {
    type: new graphql_1.GraphQLList(advertisement_1.AdvertisementType),
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = typeorm_1.createQueryBuilder('advertisement')
                .select('advertisement.ad_id', 'ad_id')
                .addSelect('advertisement.description', 'description')
                .addSelect('advertisement.image', 'image')
                .addSelect('advertisement.status', 'status')
                .addSelect('c.com_name', 'com_name')
                .addSelect('c.com_id', 'companyComId')
                .addSelect('e.event_code', 'event_code')
                .addSelect('e.id', 'eventId')
                .innerJoin('event', 'e', 'advertisement.eventId = e.id') //INNER JOIN table2 t2 ON t1.id = t2.id
                .innerJoin('company', 'c', 'advertisement.companyComId = c.com_id') // INNER JOIN table3 t3 ON t2.event = t3.event
                .getRawMany();
            return yield query;
            // console.log(result);
        });
    }
};
