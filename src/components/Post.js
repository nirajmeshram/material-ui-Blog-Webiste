import { Container } from '@mui/material'
import React from 'react'
import Markdown from 'markdown-to-jsx';

import { posts } from './data/Data'

const Post = () => {
    return (
        <div>
            <Container>
                {
                    posts.map(post =>(
                        <Markdown key={post.body}>{post.body}</Markdown>
                     ))
        
                }
             
            </Container>
        </div>
    )
}

export default Post
