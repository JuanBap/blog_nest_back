import { Injectable } from '@nestjs/common';
import {CreatePostDto} from './dto/create-post.dto'
import {Post} from './entities/post.entity'

@Injectable()
export class PostsService {

    //FIRST OPERATION: CREATE POST

    //In-memory temporal storage while supabase isn't set
    private posts: Post[] = []; 
    //Auto-increment ID
    private nextId = 1;

    create(createPostDto: CreatePostDto): Post{
        const newPost: Post = {
            id: this.nextId++,
            title: createPostDto.title,
            content: createPostDto.content,
            createdAt: new Date(),
        };

        this.posts.push(newPost);
        return newPost;
    }

}
