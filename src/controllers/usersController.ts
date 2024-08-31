import { Request, Response } from 'express';

import usersService from "../services/usersService"

export default {
    async login(request: Request, response: Response) {
        const data = await usersService.login(request.body)

        response.status(200).json(data)
    },

    async signup(request: Request, response: Response)  {
        const data = await usersService.signup(request.body)

        response.status(200).json(data)
    },

    async getProfile(request: Request, response: Response)  {
        return response.json(request.user)
    },

    async confirmEmail(request: Request, response: Response) {
        const data = await usersService.confirmUser(request.params.token)

        response.status(200).json(data)
    }
}