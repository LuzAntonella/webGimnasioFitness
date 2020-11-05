const { Router } = require('express');
const router = Router();

router.get('/', (req, res ) => {
    res.send('Hello Word')
});
router.get('/images/add', (req, res ) => {
    res.render('image_form');
});
module.exports = router;
