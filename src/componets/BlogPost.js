import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';


const BlogPost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)} />
            <Button title="Save Blog Post" />
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black"
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    }
})


export default BlogPost;