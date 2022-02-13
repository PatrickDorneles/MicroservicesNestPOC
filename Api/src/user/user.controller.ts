import { Controller, HttpCode, HttpStatus, Post } from "@nestjs/common"

@Controller("user")
export class UserController {

    @Post()
    @HttpCode(HttpStatus.CREATED)
	async create() {
		return true
	}

}
