import React from 'react'
import { posts } from './data/Data'
import Markdown from 'markdown-to-jsx'
import { Grid } from '@mui/material'

const Main = () => {
    return (
        <>
            {
                posts.map(post => (
                    <Markdown key={post.body}>{post.body}</Markdown>
                ))

            }
        </>
    )
}

export default Main
