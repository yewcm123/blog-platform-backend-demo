import { plainToInstance } from "class-transformer"
import { IsDefined, IsString } from "class-validator"
import PostEntity from "src/db/entities/post.entity"
import UserEntity from "src/db/entities/user.entity"

export default class CreatePostDto {
    @IsDefined()
    @IsString()
    title: string

    @IsDefined()
    @IsString()
    content: string

     toEntity(user: UserEntity): PostEntity {
        const post = plainToInstance(PostEntity, this)
        post.user = user
        return post

    }
}