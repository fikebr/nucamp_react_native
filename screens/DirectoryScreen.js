import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { CAMPSITES } from '../shared/campsites';

const DirectoryScreen = ({ navigation }) => {
    const [campsites, setCampsites] = useState(CAMPSITES);

    const renderDirectoryItem = ({ item: site }) => {
        return (
            <ListItem
                onPress={() => {
                    return navigation.navigate('CampsiteInfo', { site });
                }}
            >
                <Avatar source={site.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{site.name}</ListItem.Title>
                    <ListItem.Subtitle>{site.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => {
                return item.id.toString();
            }}
        />
    );
};

export default DirectoryScreen;
