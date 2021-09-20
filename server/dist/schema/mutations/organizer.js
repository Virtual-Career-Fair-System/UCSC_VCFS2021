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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_EVENT = void 0;
const graphql_1 = require("graphql");
const messages_1 = require("../typeDef/messages");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const userValidations_1 = require("../validations/userValidations");
const event_1 = require("../../entities/event");
const { GraphQLUpload } = require('graphql-upload');
exports.CREATE_EVENT = {
    type: messages_1.CreateEventResponseMessage,
    args: {
        name: { type: graphql_1.GraphQLString },
        startDate: { type: graphql_1.GraphQLString },
        endDate: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        rules: { type: graphql_1.GraphQLString },
        organizer: { type: graphql_1.GraphQLID },
        file: { type: GraphQLUpload },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, startDate, endDate, description, rules, organizer, file } = args;
            const { createReadStream, filename, mimetype, encoding } = yield file;
            if (yield userValidations_1.isExistEventName(name)) {
                return { successful: false, message: 'Event name already exists' };
            }
            const eventCode = name + organizer;
            const stream = createReadStream();
            const pathName = path_1.default.join(__dirname, `../../../../client/src/assets/image/eventCoverPhotos/${filename}`);
            yield stream.pipe(fs_1.default.createWriteStream(pathName));
            yield event_1.event.insert({
                name: name,
                cover_image: filename,
                event_code: eventCode,
                start_date: startDate,
                end_date: endDate,
                description: description,
                rules: rules,
                organizer: organizer,
                status: 'requested'
            });
            return { successful: true, message: 'Event Created successfully!' };
        });
    }
};
