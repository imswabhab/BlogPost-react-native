import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Context from '../context/BlogContext';
import BlogPost from '../componets/BlogPost';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))


    return (
        <BlogPost />
    )
}

const styles = StyleSheet.create({})

export default EditScreen;