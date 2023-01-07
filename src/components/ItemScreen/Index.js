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
import { Chip, AppHeader } from '../home/NewHome1';
import strings from '../../commonComponents/strings';

import CustomComponents from '../../CustomComponents';

/* ********************* */
function StoryCard( { storyImg, profilePic } ) {
  return (
    <View style={storyCardStyles.container}>
      <View style={storyCardStyles.story}>
        <Image source={storyImg} />
      </View>
      <View style={storyCardStyles.profileHolder}>
        <Image source={profilePic} style={storyCardStyles.profilePic} />
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
  },
  {
    storyImg: ImgAssets.banner1,
    profilePic: ImgAssets.defaultUserAvatar,
  },
  {
    storyImg: ImgAssets.banner1,
    profilePic: ImgAssets.defaultUserAvatar,
  },
  {
    storyImg: ImgAssets.banner1,
    profilePic: ImgAssets.defaultUserAvatar,
  },
  {
    storyImg: ImgAssets.banner1,
    profilePic: ImgAssets.defaultUserAvatar,
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

export default function ItemScreen( { navigation } ) {
  const theme = useSelector( state => state.appReducer.theme );
  const [selectedCatagory, setSelectedCatagory] = useState();
  const [isSearched, setIsSearched] = useState( false );

  const handleSelectCatagory = ( key ) => {
    setSelectedCatagory( key )
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
