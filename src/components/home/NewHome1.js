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
    width: width - 28,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius,
  },
  boxContainer2: {
    marginVertical,
    marginHorizontal,
    width: width,
    height: 2 * ( height + marginHorizontal ),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius,
  },
  boxContainer3: {
    marginVertical,
    marginHorizontal,
    width: 2 * ( width + marginVertical ) - 28,
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
    <TouchableOpacity style={chipWithImageStyles.categoryItemContainer}>
      <View style={chipWithImageStyles.categoryItem}>
        <View style={{ marginBottom: 10 }}>
          <Image source={image} />
        </View>
        <Text style={{ color: '#fff' }}>{text}</Text>
      </View>
    </TouchableOpacity>
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

export default function NewHome1( { navigation, props } ) {
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
        <CustomComponents.CustomText value="WHAT IS INCLUDED" style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
          marginVertical: 8
        }} />
        <GridView />
      </View>
      <Text style={{ color: '#fff', marginBottom: 10, marginLeft: 8 }}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {catagoryList.map( each => {
          return <ChipWithImage key={each.id} text={each.title} />;
        } )}
      </ScrollView>
      <View style={{ marginBottom: 10 }}>
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
