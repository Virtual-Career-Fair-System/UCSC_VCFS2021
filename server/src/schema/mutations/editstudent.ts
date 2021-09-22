import {GraphQLID, GraphQLString} from "graphql";
import {CreateEventResponseEditProfileMessage} from "../typeDef/messages";
import {GraphQLUpload} from "graphql-upload";
import path from "path";
import fs from "fs";
import {student} from "../../entities/student";

export const UPDATE_STUDENT = {
  type: CreateEventResponseEditProfileMessage,
  args: {
    id: {type: GraphQLID},
    fname: {type: GraphQLString},
    lname: {type: GraphQLString},
    projectDis1: {type: GraphQLString},
    project1: {type: GraphQLString},
    projectDis2: {type: GraphQLString},
    project2: {type: GraphQLString},
    projectDis3: {type: GraphQLString},
    project3: {type: GraphQLString},
    address: {type: GraphQLString},
    skills: {type: GraphQLString},
    linkedIn: {type: GraphQLString},
    contactNumber: {type: GraphQLString},
    profilePicture: {type: GraphQLUpload},
    coverPhoto: {type: GraphQLUpload},
  },

  async resolve(parent: any, args: any) {
    const {
      id,
      fname,
      lname,
      profile_pic,
      address,
      linkedIn,
      contactNumber,
      project1,
      skills,
      project2,
      project3,
      projectDis3,
      projectDis2,
      projectDis1,
      profilePicture,
      coverPhoto
    } = args;

    const tempProfilePicture:any= await profilePicture;
    const streamProfilePicture:any = tempProfilePicture.createReadStream();
    const profilePicturePathName: any = path.join(__dirname, `../../../../client/src/assets/image/profileImages/${tempProfilePicture.filename}`)
    await streamProfilePicture.pipe(fs.createWriteStream(profilePicturePathName));

    const tempCoverPhoto:any= await coverPhoto;
    const streamCoverPhoto =await tempCoverPhoto.createReadStream();
    const coverPhotoPathName: any = path.join(__dirname, `../../../../client/src/assets/image/studentCoverPicture/${tempCoverPhoto.filename}`)
    await streamCoverPhoto.pipe(fs.createWriteStream(coverPhotoPathName));

    await student.update({id: id}, {
      f_name: fname,
      l_name: lname,
      image: tempProfilePicture.filename,
      cover_pic: tempCoverPhoto.filename,
      ContactNumber: contactNumber,
      address: address,
      skills:skills,
      linkedin: linkedIn,
      project2: project2,
      project3: project3,
      project1: project1,
      projectDis1: projectDis1,
      projectDis2: projectDis2,
      projectDis3: projectDis3
    });
    return {successful: true, message: 'Profile updated successfully!'}
  }
}