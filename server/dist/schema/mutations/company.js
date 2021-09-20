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
exports.CREATE_COMPANY = void 0;
const graphql_1 = require("graphql");
const user_1 = require("../../entities/user");
const messages_1 = require("../typeDef/messages");
const userValidations_1 = require("../validations/userValidations");
const crypto_1 = __importDefault(require("crypto"));
const company_1 = require("../../entities/company");
exports.CREATE_COMPANY = {
    type: messages_1.RegisterResponseMessageType,
    args: {
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = args;
            if (yield userValidations_1.isExistEmail(email)) {
                return { successful: false, message: 'Email already taken' };
            }
            const PasswordSh1 = crypto_1.default.createHash('md5').update(password).digest('hex');
            const x = yield user_1.user.insert({ type: 'company', email: email });
            yield company_1.company.insert({ com_id: x.raw.insertId, com_name: name, password: PasswordSh1, email: email });
            return { successful: true, message: 'Registered successfully!' };
        });
    }
};
