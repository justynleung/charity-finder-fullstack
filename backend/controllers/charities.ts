import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'
import Charity from '../models/charity';
import { error } from 'console';

const getAllFavCharities = async (req: Request, res: Response) => {
    const charities = await Charity.find({})
    res.status(StatusCodes.OK).json({ charities, count: charities.length })
}

const getFavCharity = async (req: Request, res: Response) => {
    const { id: charityId } = req.params
    const charity = await Charity.findById({ _id: charityId })
    if (!charity) {
        console.log(error)
    }
    res.status(StatusCodes.OK).json({ charity })
}

const createFavCharities = async (req: Request, res: Response) => {
    const charity = await Charity.create(req.body)
    res.status(StatusCodes.OK).json({ charity })
}

const removeFavCharity = async (req: Request, res: Response) => {
    const { id: charityId } = req.params
    const charity = await Charity.findOneAndDelete({ _id: charityId })
    if (!charity) {
        return `No task with id : ${charityId}`
    }
    res.status(200).json({ charity })
}

export { createFavCharities, getAllFavCharities, getFavCharity, removeFavCharity }



