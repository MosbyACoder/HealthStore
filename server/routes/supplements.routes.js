import express from 'express'
import supplementCtrl from '../controllers/supplements.controller.js'
const router = express.Router()
router.route('/api/supplements').post(supplementCtrl.create)
router.route('/api/supplements').get(supplementCtrl.list)
router.param('supplementId', supplementCtrl.supplementByID)
router.route('/api/supplements/:supplementId').get(supplementCtrl.read)
router.route('/api/supplements/:supplementId').put(supplementCtrl.update)
router.route('/api/supplements/:supplementId').delete(supplementCtrl.remove)
export default router