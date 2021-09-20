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
exports.UPDATE_STUDENT = void 0;
const graphql_1 = require("graphql");
const messages_1 = require("../typeDef/messages");
const graphql_upload_1 = require("graphql-upload");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const student_1 = require("../../entities/student");
exports.UPDATE_STUDENT = {
    type: messages_1.CreateEventResponseEditProfileMessage,
    args: {
        id: { type: graphql_1.GraphQLID },
        fname: { type: graphql_1.GraphQLString },
        lname: { type: graphql_1.GraphQLString },
        projectDis1: { type: graphql_1.GraphQLString },
        project1: { type: graphql_1.GraphQLString },
        projectDis2: { type: graphql_1.GraphQLString },
        project2: { type: graphql_1.GraphQLString },
        projectDis3: { type: graphql_1.GraphQLString },
        project3: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        skills: { type: graphql_1.GraphQLString },
        linkedIn: { type: graphql_1.GraphQLString },
        contactNumber: { type: graphql_1.GraphQLString },
        profilePicture: { type: graphql_upload_1.GraphQLUpload },
        coverPhoto: { type: graphql_upload_1.GraphQLUpload },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, fname, lname, profile_pic, address, linkedIn, contactNumber, project1, skills, project2, project3, projectDis3, projectDis2, projectDis1, profilePicture, coverPhoto } = args;
            const tempProfilePicture = yield profilePicture;
            const streamProfilePicture = tempProfilePicture.createReadStream();
            const profilePicturePathName = path_1.default.join(__dirname, `../../../../client/src/assets/image/profileImages/${tempProfilePicture.filename}`);
            yield streamProfilePicture.pipe(fs_1.default.createWriteStream(profilePicturePathName));
            const tempCoverPhoto = yield coverPhoto;
            const streamCoverPhoto = yield tempCoverPhoto.createReadStream();
            const coverPhotoPathName = path_1.default.join(__dirname, `../../../../client/src/assets/image/studentCoverPicture/${tempCoverPhoto.filename}`);
            yield streamCoverPhoto.pipe(fs_1.default.createWriteStream(coverPhotoPathName));
            yield student_1.student.update({ id: id }, {
                f_name: fname,
                l_name: lname,
                image: tempProfilePicture.filename,
                cover_pic: tempCoverPhoto.filename,
                ContactNumber: contactNumber,
                address: address,
                skills: skills,
                linkedin: linkedIn,
                project2: project2,
                project3: project3,
                project1: project1,
                projectDis1: projectDis1,
                projectDis2: projectDis2,
                projectDis3: projectDis3
            });
            return { successful: true, message: 'Profile updated successfully!' };
        });
    }
};
