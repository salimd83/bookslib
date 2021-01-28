const functions = require("firebase-functions");
const admin = require("firebase-admin");
const path = require("path");
const os = require("os");
const spawn = require("child-process-promise").spawn;
const fs = require("fs");

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.generateThumbnail = functions.https.onCall(async (data, context) => {
    console.log(data);
    const fileBucket = data.bucket;
    const filePath = data.fullPath;
    const contentType = data.contentType;
    const filename = path.basename(filePath);

    // if (!contentType.startsWith("image/")) return console.log("Not an image.");

    const dir = path.dirname(filePath);
    // if (!path.dirname(filePath) === "images/books") return;

    // if (filename.startsWith("thumb_"))
    //   return console.log("Image already a thumbnail");

    console.log(fileBucket, filePath, contentType, dir);
    bucket = admin.storage().bucket(fileBucket);
    const tempFilePath = path.join(os.tmpdir(), filename);
    const metadata = {
      contentType: contentType,
    };
    await bucket.file(filePath).download({ destination: tempFilePath });
    console.log("image has been downloaded to:", tempFilePath);
    const thumbFileName = `thumb_${filename}`;
    const thumbFilePath = path.join(dir, thumbFileName);
    await spawn("convert", [
      tempFilePath,
      "-thumbnail",
      "400x400>",
      tempFilePath,
    ]);
    console.log("thumbnail has been created");
    return bucket.upload(tempFilePath, {
      destination: thumbFilePath,
      metadata: metadata,
    }).then(() => {
        fs.unlinkSync(tempFilePath);
        return true;
    })
    
  });
