import express from "express";
import { getAllFavCharities, getFavCharity, removeFavCharity, createFavCharities } from '../controllers/charities'

const router = express.Router()

router.route('/').get(getAllFavCharities).post(createFavCharities)
router.route('/:id').get(getFavCharity).delete(removeFavCharity)

export default router