import fs from 'fs';
import path from 'path';
import AWS from 'aws-sdk';

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new AWS.Endpoint('sgp1.digitaloceanspaces.com');
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  credentials: {
    accessKeyId: 'XOTPUHM732XVKDSISKBI',
    secretAccessKey: 'QED3n3d60r4QidtgVSPszJOH6OZNi2aeBoO0pb95WRA',
  },
});

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'your-space-here',
//     acl: 'public-read',
//     key: function (request, file, cb) {
//       console.log(file);
//       cb(null, file.originalname);
//     },
//   }),
// }).array('upload', 1);

const fileContent = fs.readFileSync(
  path.join(process.cwd(), 'static/charging_category.json'),
  'utf8',
);

setTimeout(() => {
  s3.upload(
    {
      Bucket: 'demo-cdn',
      Key: 'folder/test.png',
      Body: fileContent,
    },
    (err, data) => {
      console.log('upload', err, data);
    },
  );
  console.log('yyy');
}, 5000);
