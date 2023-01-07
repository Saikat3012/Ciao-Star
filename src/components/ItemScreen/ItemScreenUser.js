import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import ImgAssets from '../../ImgAssets';
import { Chip, AppHeader } from '../home/HomeCelib';
import strings from '../../commonComponents/strings';

import CustomComponents from '../../CustomComponents';




const postList = [
  {
    id: 1,
    pic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
    title: 'Shooting Star',
    time: '12:30 Min'

  },
  {
    id: 2,
    pic: 'data:image/jpeg;base64,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',
    title: 'Shooting Star',
    time: '12:30 Min'
  },
  {
    id: 3,
    pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Shooting Star',
    time: '12:30 Min'
  },
  {
    id: 4,
    pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Shooting Star',
    time: '12:30 Min'
  },
  {
    id: 5,
    pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Shooting Star',
    time: '12:30 Min'
  },
]

/* ********************* */
function StoryCard( { storyImg, profilePic, item } ) {
  return (
    <View style={storyCardStyles.container}>
      <View style={storyCardStyles.story}>
        <Image source={storyImg} />
      </View>
      <View style={[storyCardStyles.profileHolder, item.seen && { borderColor: '#fff' }]}>
        <Image source={profilePic} style={[storyCardStyles.profilePic]} />
      </View>
    </View>
  );
}

const storyCardStyles = StyleSheet.create( {
  container: {
    width: 90,
    height: 135,
    position: 'relative',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  story: {
    overflow: 'hidden',
    width: 90,
    height: 135 - 40 / 2,
    borderRadius: 5,
  },
  profileHolder: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'gold',
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  profilePic: {
    width: 30,
    height: 30,
    overflow: 'hidden',
    borderRadius: 5,
  },
} );

/* ********************* */

function ItemCard( { imageSrc, title, category, price, theme } ) {
  return (
    <View style={itemCardStyles.container}>
      <View style={itemCardStyles.imageHolder}>
        <Image source={imageSrc} />
      </View>
      <View style={itemCardStyles.textArea}>
        <CustomComponents.CustomText style={{ fontSize: 12 }} value={title} />
        <CustomComponents.CustomText style={{ color: '#aaa', fontSize: 10, marginBottom: 5 }} value={category} />
        <CustomComponents.CustomText style={{ color: '#aaa', fontSize: 10 }} value={price} />
      </View>
    </View>
  );
}

const itemCardStyles = StyleSheet.create( {
  container: {
    width: 6 * 18.5,
    height: 9 * 18.5,
    backgroundColor: '#1F1F1F',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  imageHolder: {
    width: 6 * 18,
    height: 9 * 12,
    overflow: 'hidden',
    borderRadius: 5,
  },
  textArea: {
    marginTop: 3,
    marginHorizontal: 5,
  },
} );

const storyDetails = [
  {
    storyImg: ImgAssets.banner1,
    profilePic: ImgAssets.defaultUserAvatar,
    seen: true,
  },
  {
    storyImg: ImgAssets.banner1,
    profilePic: ImgAssets.defaultUserAvatar,
    seen: false,
  },
  {
    storyImg: ImgAssets.banner1,
    profilePic: ImgAssets.defaultUserAvatar,
    seen: true,
  },
  {
    storyImg: ImgAssets.banner1,
    profilePic: ImgAssets.defaultUserAvatar,
    seen: false,
  },
  {
    storyImg: ImgAssets.banner1,
    profilePic: ImgAssets.defaultUserAvatar,
    seen: false,
  },
];

const chipItems = [
  {
    ionIconName: 'apps',
    chipLabel: 'All',
    IconProvider: OcticonsIcon,
  },
  {
    ionIconName: 'film-outline',
    chipLabel: 'Action',
    IconProvider: IoniconsIcon,
  },
  {
    ionIconName: 'smile',
    chipLabel: 'Comedy',
    IconProvider: FeatherIcon,
  },
  {
    ionIconName: 'sports-football',
    chipLabel: 'Sports',
    IconProvider: MaterialIconsIcon,
  },
  {
    ionIconName: 'music',
    chipLabel: 'Artist',
    IconProvider: FeatherIcon,
  },
];

const cardItems = [
  {
    imageSrc: ImgAssets.banner1,
    title: 'Paul Smith',
    category: 'Comedian',
    price: 'From 2$',
  },
  {
    imageSrc: ImgAssets.banner1,
    title: 'Paul Smith',
    category: 'Comedian',
    price: 'From 2$',
  },
  {
    imageSrc: ImgAssets.banner1,
    title: 'Paul Smith',
    category: 'Comedian',
    price: 'From 2$',
  },
  {
    imageSrc: ImgAssets.banner1,
    title: 'Paul Smith',
    category: 'Comedian',
    price: 'From 2$',
  },
  {
    imageSrc: ImgAssets.banner1,
    title: 'Paul Smith',
    category: 'Comedian',
    price: 'From 2$',
  },
];

export default function ItemScreenUser( { navigation } ) {
  const theme = useSelector( state => state.appReducer.theme );
  const [selectedCatagory, setSelectedCatagory] = useState();
  const [isSearched, setIsSearched] = useState( false );

  const handleSelectCatagory = ( key ) => {
    setSelectedCatagory( key )
    navigation.navigate( "ShowContentCatagoryWise", { title: key, list: postList } )
  }
  const handleProfileView = () => {
    navigation.navigate( "ProfileViewUserTile" )
  }
  return (
    <ScrollView
      style={{
        backgroundColor: theme.primaryBackgroundColor,
        flex: 1,
      }}>
      <AppHeader theme={theme} navigation={navigation} isSearched={isSearched} setIsSearched={setIsSearched} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {storyDetails.map( ( el, i ) => (
          <TouchableOpacity>
            <StoryCard
              key={i}
              item={el}
              storyImg={el.storyImg}
              profilePic={el.profilePic}
            />
          </TouchableOpacity>
        ) )}
      </ScrollView>
      <View>
        <CustomComponents.CustomText style={{ marginHorizontal: 10, marginVertical: 10, fontSize: 14 }} value="Categories" />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {chipItems.map( ( el, i ) => (
          <View
            style={{
              marginHorizontal: 10,
            }}>
            <Chip
              key={i}
              selected={el.chipLabel == selectedCatagory}
              handleSelectCatagory={handleSelectCatagory}
              ionIconName={el.ionIconName}
              item={el}
              chipLabel={el.chipLabel}
              IconProvider={el.IconProvider}
            />
          </View>
        ) )}
      </ScrollView>
      <View>
        <CustomComponents.CustomText value="International" style={{ marginHorizontal: 10, marginVertical: 10, fontSize: 14 }} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cardItems.map( ( el, i ) => (
          <TouchableOpacity onPress={() => handleProfileView()}>
            <ItemCard
              theme={theme}
              key={i}
              imageSrc={el.imageSrc}
              title={el.title}
              category={el.category}
              price={el.price}
            />
          </TouchableOpacity>
        ) )}
      </ScrollView>
      <View>
        <CustomComponents.CustomText style={{ marginHorizontal: 10, marginVertical: 10, fontSize: 14 }} value="Featured" />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cardItems.map( ( el, i ) => (
          <TouchableOpacity onPress={() => handleProfileView()}>
            <ItemCard
              theme={theme}
              key={i}
              imageSrc={el.imageSrc}
              title={el.title}
              category={el.category}
              price={el.price}
            />
          </TouchableOpacity>
        ) )}
      </ScrollView>
      <View>
        <CustomComponents.CustomText style={{ marginHorizontal: 10, marginVertical: 10, fontSize: 14 }} value="Comedian" />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cardItems.map( ( el, i ) => (
          <TouchableOpacity onPress={() => handleProfileView()}>
            <ItemCard
              theme={theme}
              key={i}
              imageSrc={el.imageSrc}
              title={el.title}
              category={el.category}
              price={el.price}
            />
          </TouchableOpacity>
        ) )}
      </ScrollView>
      <View style={{ height: 100 }} />
      {isSearched && <CustomComponents.CustomSearchBox />}
    </ScrollView>
  );
}

const styles = StyleSheet.create( {} );
