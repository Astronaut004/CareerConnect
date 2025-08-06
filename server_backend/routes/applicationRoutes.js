import express from 'express';
import { applyToJob , getApplications, withdrawApplication} from '../Controllers/applicationController.js';
 import protect from '../middlewares/authMiddleware.js';


 const router = express.Router();

   router
   .route('/jobs/apply')
    .post(protect, applyToJob)
     .get(protect, getApplications)

//  router
//  .route('/jobs/apply/:id')
//     .delete(protect, withdrawApplication);


// // router.route('/').patch(protect,function)

 export default router;