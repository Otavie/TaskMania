const express = require('express');
const indexRouter = express.Router();

// Anyone Can Access the Home/Index Page 
indexRouter.get('/', (req, res) => {
    try {
        const NavLinks = [
            { link_name: 'Login', url: '/login' },
        ]

        res.status(200).render('index', {
            title: "Home",
            links: NavLinks,
            req: req,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error!');
    }
});


module.exports = indexRouter;