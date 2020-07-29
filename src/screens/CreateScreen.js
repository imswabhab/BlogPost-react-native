import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPost from '../componets/BlogPost';

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context);
    return <BlogPost />
}

const styles = StyleSheet.create({

})

export default CreateScreen;