import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import CustomComponents from '../../CustomComponents';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/actions/action';
import ImgAssets from '../../ImgAssets';
import texts from './texts';
import strings from '../../commonComponents/strings';


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

// ========= Chip ========== //
export function Chip( { icon, chipLabel, IconProvider = IoniconsIcon, selected, handleSelectCatagory } ) {
  return (
    <TouchableOpacity onPress={() => handleSelectCatagory( chipLabel )}>
      <View style={[chipStyles.container, selected && { backgroundColor: '#439FF4' }]}>
        <View style={chipStyles.chipIcon}>
          <Image source={icon} style={{ height: 20, width: 20 }} />
        </View>
        <CustomComponents.CustomText style={{ fontSize: 10, marginLeft: 8 }} value={chipLabel} />
      </View>
    </TouchableOpacity>
  );
}

const chipStyles = StyleSheet.create( {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#1F1F1F',
    borderRadius: 5,
  },
  chipIcon: {
    padding: 5,
    backgroundColor: '#343333',
    marginRight: 3,
    borderRadius: 5,
  },
} );

// ========= GridView ========== //
const borderRadius = 10;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width =
  Dimensions.get( 'window' ).width / cols - marginHorizontal * ( cols + 1 );
const height = 100;

function GridView() {
  const b1 = 'https://i.ibb.co/LNs1CND/Screenshot-2022-02-05-at-10-18-1.png'
  const b2 = 'https://i.ibb.co/ZJw7Rc3/Screenshot-2022-02-05-at-10-17-1.png'
  const b3 = 'https://i.ibb.co/bH06LC9/s2.jpg'
  const b4 = 'https://i.ibb.co/VT8SRLC/s1.jpg'
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={gridViewStyles.sectionContainer}>
        <View>
          <TouchableOpacity>
            <Image source={{ uri: b1 }}
              style={gridViewStyles.boxContainer1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{ uri: b2 }}
              style={gridViewStyles.boxContainer1} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image source={{ uri: b3 }}
            style={gridViewStyles.boxContainer2} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image source={{ uri: b4 }}
          style={gridViewStyles.boxContainer3} />
      </TouchableOpacity>
    </View>
  );
}

const gridViewStyles = StyleSheet.create( {
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get( 'window' ).width,
  },
  boxContainer1: {
    marginVertical,
    marginHorizontal,
    width: width - 53,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius,
  },
  boxContainer2: {
    marginVertical,
    marginHorizontal,
    width: width - 25,
    height: 2 * ( height + marginHorizontal ),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius,
  },
  boxContainer3: {
    marginVertical,
    marginHorizontal,
    width: 2 * ( width + marginVertical ) - 70,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius,
  },
} );

// ========= ChipWithImage ========== //
function ChipWithImage( { text, image = ImgAssets.profileDark } ) {
  return (
    <View style={chipWithImageStyles.categoryItemContainer}>
      <View style={chipWithImageStyles.categoryItem}>
        <View style={{ marginBottom: 10 }}>
          <Image source={image} />
        </View>
        <Text style={{ color: '#fff' }}>{text}</Text>
      </View>
    </View>
  );
}

const chipWithImageStyles = StyleSheet.create( {
  categoryItemContainer: {
    backgroundColor: 'grey',
    width: 120,
    height: 80,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  categoryItem: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
} );

// ================================= //

export function AppHeader( { theme, navigation, isSearched, setIsSearched } ) {
  const handleProfileClick = () => {
    navigation.navigate( "AccountSettings" )
  }
  const handleSearchClick = () => {
    // navigation.navigate( "ItemScreen" )
    setIsSearched( !isSearched )
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
      }}>
      <TouchableOpacity onPress={() => handleProfileClick()}>
        {theme.type == 'dark' ? (
          <IoniconsIcon name="menu" size={25} color="#fff" />
        ) : (
          <IoniconsIcon name="menu" size={25} color="#000" />
        )}
      </TouchableOpacity>
      {/* <Text style={{ color: theme.type == 'dark' ? '#fff' : '#000' }}>
        SOCIALSTREAM
      </Text> */}
      <CustomComponents.AppLogo size={14} first={strings.SOCIAL} second={strings.STREAM} />
      <TouchableOpacity onPress={() => handleSearchClick()}>
        {theme.type == 'dark' ? (
          <IoniconsIcon name="search" size={25} color="#fff" />
        ) : (
          <IoniconsIcon name="search" size={25} color="#000" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const chipItems = [
  {
    icon: ImgAssets.selectHome,
    chipLabel: 'Select',
  },
  {
    icon: ImgAssets.subscribeHome,
    chipLabel: 'Subscribe',
  },
  {
    icon: ImgAssets.playHome,
    chipLabel: 'Enjoy',
  },
];

const catagoryList = [
  {
    id: 1,
    title: 'Actor',
  },
  {
    id: 2,
    title: 'Atheletes',
  },
  {
    id: 3,
    title: 'Comedians',
  },
  {
    id: 4,
    title: 'Singer',
  },
];

export default function HomeCelib( { navigation, props } ) {
  const dispatch = useDispatch();
  const updateTheme = newTheme => dispatch( changeTheme( newTheme ) );
  const theme = useSelector( state => state.appReducer.theme );
  const [isSearched, setIsSearched] = useState( false );

  const handleSelectCatagory = ( ele ) => {
    if ( ele == 'Subscribe' ) {
      navigation.navigate( "ItemScreen" )
      return
    }
    alert( ele )
  }

  return (
    <ScrollView
      style={{
        backgroundColor: theme.primaryBackgroundColor,
        flex: 1,
        paddingHorizontal: 14
      }}>
      <AppHeader theme={theme} navigation={navigation} isSearched={isSearched} setIsSearched={setIsSearched} />

      <View style={{ marginBottom: 10 }}>
        <ImageBackground
          source={ImgAssets.banner1}
          style={styles.headBannerContainer}>
          <CustomComponents.CustomText
            value={texts.BANNER_HEADING}
            style={styles.headBannerText}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10,
        }}>
        {chipItems.map( ( el, i ) => (
          <Chip key={i} icon={el.icon} chipLabel={el.chipLabel} handleSelectCatagory={handleSelectCatagory} />
        ) )}
      </View>
      <View style={{ marginBottom: 10 }}>
        <CustomComponents.CustomText value="WHAT YOU WILL GET" style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
          marginVertical: 8,
          marginTop: 25
        }} />
        <GridView />
      </View>
      <CustomComponents.CustomText style={{
        marginBottom: 10,
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 16,
      }} value="Categories" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {catagoryList.map( each => {
          return (
            <TouchableOpacity key={each.id} onPress={() => {
              console.log( each )
              navigation.navigate( "ShowContentCatagoryWise", { title: each.title, list: postList } )
            }}>
              <ChipWithImage key={each.id} text={each.title} />
            </TouchableOpacity> )
        } )}
      </ScrollView>
      <View style={{ marginBottom: 10, marginTop: 25 }}>
        <GridView />
      </View>
      <View style={{ height: 100 }} />
      {isSearched && <CustomComponents.CustomSearchBox />}
    </ScrollView >
  );
}

const styles = StyleSheet.create( {
  headBannerContainer: {
    width: '100%',
    height: 200,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headBannerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
} );
