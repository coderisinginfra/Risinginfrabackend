const AddProject = require('../Models/AddProject');
const cloudinary = require('../Helpers/Cloudinary');
const upload = require('../Middleware/Multer');

const AddProjectController = async (req, res) => {
    const {
        propertyTitle, category, projectType, developer, city, location, sitelocation, size, price, keywords, amenties, content, featuredproject, prelease
    } = req.body;

    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: 'No files uploaded' });
        }

        const uploadImage = async (file) => {
            if (file && file[0]) {
                const uploadResult = await cloudinary.uploader.upload(file[0].path);
                return uploadResult.url;
            }
            return null;
        };

        const images = await uploadImage(req.files['image']);
        const floorplan1 = await uploadImage(req.files['floorplan1']);
        const floorplan2 = await uploadImage(req.files['floorplan2']);
        const floorplan3 = await uploadImage(req.files['floorplan3']);
        const galleryimage1 = await uploadImage(req.files['galleryimage1']);
        const galleryimage2 = await uploadImage(req.files['galleryimage2']);
        const galleryimage3 = await uploadImage(req.files['galleryimage3']);

        // Ensure amenties is converted to an array of strings
        const amentiesArray = Array.isArray(amenties) ? amenties : [amenties];

        const resultdata = new AddProject({
            propertyTitle,
            category,
            projectType,
            developer,
            city,
            location,
            sitelocation,
            size,
            price,
            amenties: amentiesArray, // Ensure amenties is an array
            content,
            featuredproject,
            prelease,
            keywords,
            images,
            floorplan1,
            floorplan2,
            floorplan3,
            galleryimage1,
            galleryimage2,
            galleryimage3
        });

        const response = await resultdata.save();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` });
    }
};

module.exports = AddProjectController;
