const router = require('express').Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const sharp = require('sharp');

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


const filter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === 'image') {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed!"));
    }
};

const imageUploader = multer({
    storage,
    fileFilter: filter
});

router.post('/image_upload', imageUploader.single("image-file"), async (req, res) => {

    const path = `./public/img/${req.file.originalname}`;

    if (req.body.editType === "image-flip"){
        await sharp(req.file.buffer).flip().toFile(path);
    } 
    else if (req.body.editType === "image-flop"){
        await sharp(req.file.buffer).flop().toFile(path);
    } 
    else if (req.body.editType === "image-sharpen"){ 
        await sharp(req.file.buffer).sharpen().toFile(path);
    } 
    else if (req.body.editType === "image-blur"){
        await sharp(req.file.buffer).blur().toFile(path);
    } 
    else if (req.body.editType === "image-greyscale"){
        await sharp(req.file.buffer).greyscale().toFile(path);
    };
});
module.exports = router;
