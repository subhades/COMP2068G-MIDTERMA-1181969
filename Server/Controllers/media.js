// Media model for CRUD
let Media = require('../Models/media');
let Providers = require('../Models/providers');

let index = async (req, res, next) => {
    // fetch all media docs 
    let media = await Media.find();

    console.log(media);
    res.render('media/index', { 
        title: 'Media Library',
        media: media
    });
};

let displayCreateForm = async(req, res, next) => {
    let providers = await Providers.find();
    res.render('media/create', { 
        title: 'Add New Media',
        provider: providers
    });
};

let createMedia = async (req, res, next) => {
    // save new media to DB
    await Media.create(
        req.provider,
        req.body);
    
    // redirect
    res.redirect('/media');
};

let deleteMedia = async (req, res, next) => {
    // remove selected doc
    await Media.findByIdAndDelete(req.params._id);
    // await Media.deleteOne({ _id: req.params._id }); - this works too

    // redirect
    res.redirect('/media');
};

let displayEditForm = async (req, res, next) => {
    let media = await Media.findById(req.params._id);
    let providers = await Providers.find(req.name);
    res.render('media/edit', { 
        title: 'Update Media',
        media: media,
        provider:providers
    });
};

let updateMedia = async (req, res, next) => {
    await Media.findByIdAndUpdate(
        req.params._id,
        req.body);
    res.redirect('/media');
};

// make public
module.exports = {
    index, displayCreateForm, createMedia, deleteMedia, displayEditForm,
    updateMedia
};