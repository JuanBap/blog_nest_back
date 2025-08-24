import { Controller, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity} from './entities/post.entity';



@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

        @Post()
        create(@Body() createPostDto: CreatePostDto): PostEntity {
            return this.postsService.create(createPostDto);
        }

}

