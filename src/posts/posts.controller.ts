import { Controller, Param, Post, Body, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity} from './entities/post.entity';



@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

        // 1. CREATE post
        @Post()
        create(@Body() createPostDto: CreatePostDto): PostEntity {
            return this.postsService.create(createPostDto);
        }

        // 2. RETRIEVE posts, either all or a single
        @Get()
        findAll(): PostEntity[]{
            return this.postsService.findAll();
        }

        @Get(':id')
        findOne(@Param('id') id: string): PostEntity{
            return this.postsService.findOne(+id);
        }

}




