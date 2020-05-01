const router=express.Router();
const productController= require('../controllers/product_controller');

router.get('/',productController.home);
router.use('/products',require('./products'));


module.exports=router;