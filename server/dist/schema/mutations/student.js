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
exports.CREATE_STUDENT = void 0;
const graphql_1 = require("graphql");
const student_1 = require("../../entities/student");
const user_1 = require("../../entities/user");
const messages_1 = require("../typeDef/messages");
const userValidations_1 = require("../validations/userValidations");
const crypto_1 = __importDefault(require("crypto"));
exports.CREATE_STUDENT = {
    type: messages_1.RegisterResponseMessageType,
    args: {
        fname: { type: graphql_1.GraphQLString },
        lname: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        regNo: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fname, lname, email, regNo, password } = args;
            if (yield userValidations_1.isExistEmail(email)) {
                return { successful: false, message: 'Email already taken' };
            }
            if (yield userValidations_1.isExistRegNo(regNo)) {
                return { successful: false, message: 'Registration number already taken' };
            }
            const PasswordSh1 = crypto_1.default.createHash('md5').update(password).digest('hex');
            const x = yield user_1.user.insert({ type: 'student', email: email });
            yield student_1.student.insert({ id: x.raw.insertId, f_name: fname, l_name: lname, password: PasswordSh1, reg_no: regNo, email: email });
            return { successful: true, message: 'Registered successfully!' };
        });
    }
};
