const router = require('express').Router();
const recipesCtrl = require('../controllers/recipes');

router.get('/', checkAuth, recipesCtrl.index);
router.post('/', checkAuth, recipesCtrl.create);
router.put('/:id', checkAuth, recipesCtrl.update);
router.delete('/:id', checkAuth, recipesCtrl.delete);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(501).json({msg: 'Not Authorized'});
}

module.exports = router;