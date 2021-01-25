const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth');
const { 
    subirImagen,
    createBanner,
    getBanners,
    agregateBanner,
    deleteBanner,
    eliminarImagen,
    editSubBanner,
    deleteSubCanner,
    publishedBanner,
    getBannersAdmin
} = require('../controllers/bannerCategoria');

router.route('/')
    .get(getBanners)
    .post(auth,createBanner);

router.route('/admin/').get(auth,getBannersAdmin)

router.route('/:idBanner').put(auth,subirImagen,agregateBanner).delete(auth,deleteBanner);

router.route('/:idBanner/action/:idSubBanner').put(auth,subirImagen,editSubBanner).delete(auth,deleteSubCanner);

router.route('/imagen/:idBanner').delete(auth,eliminarImagen);

router.route('/publicar/:idBanner').post(auth,publishedBanner);

module.exports = router;