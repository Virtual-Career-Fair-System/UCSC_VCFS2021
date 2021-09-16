"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_EVENTS = void 0;
const graphql_1 = require("graphql");
const event_1 = require("../typeDef/event");
const event_2 = require("../../entities/event");
exports.GET_ALL_EVENTS = {
    type: new graphql_1.GraphQLList(event_1.EventType),
    resolve() {
        return event_2.event.find();
    }
};
