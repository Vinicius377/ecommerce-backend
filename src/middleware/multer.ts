import multer from "multer";
import path from "path";
import { randomBytes } from "crypto";

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "..", "..", "uploads"),
  filename(req, file, cb) {
    randomBytes(16, (error, hash) => {
      const filename = `${hash.toString("hex")}-${file.originalname}`;
      if (!error) {
        cb(null, filename);
      } else {
        cb(error, filename);
      }
    });
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    const allowedMINETypes = [
      "image/png",
      "image,jpg",
      "image/jpeg",
      "image/gif",
    ];
    if (allowedMINETypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(file.originalname + " is not a valid format"));
    }
  },
});

export { upload };
