import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from './styles';
import {Grid} from "@material-ui/core";
import {CircularProgress} from "@material-ui/core";

const Posts = ({setCurrentId}) => {
const {posts , isLoading} = useSelector((state) => state.posts);
const classes = useStyles();


if (!posts.length && !isLoading) return 'No posts';

    return (
        isLoading ? <CircularProgress className={classes.circular} /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
    ))};

export default Posts;