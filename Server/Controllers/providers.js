// providers model for CRU
let Providers = require('../Models/providers');

let index = async (req, res, next) => {
    // fetch all providers docs 
    let providers = await Providers.find();

    console.log(providers);
    res.render('providers/index', { 
        providers: providers
    });
};

let displayCreateForm = (req, res, next) => {
    res.render('providers/create', { title: 'Add New Provider' });
};

let createProvider = async (req, res, next) => {
    // save new media to DB
    await Providers.create(req.body);

    // redirect
    res.redirect('/providers');
};


let displayEditForm = async (req, res, next) => {
    let providers = await Providers.findById(req.params._id);

    res.render('providers/edit', { 
        title: 'Update Providers',
        providers: providers
    });
};

let updateProvider = async (req, res, next) => {
    await Providers.findByIdAndUpdate(req.params._id, req.body);
    res.redirect('/providers');
};

// make public
module.exports = {
    index, displayCreateForm, createProvider, displayEditForm,
    updateProvider
};