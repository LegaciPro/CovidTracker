import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { Block, Button, TextView } from "../components";
import { Colors } from "../styles/color";

const W = Dimensions.get("window").width;

const Item = ({ icon, title }) => {
  return (
    <Block block centered>
      <Button middle shadow color="#fff" padding={10} borderRadius={12}>
        <Image source={icon} />
        <TextView bold center>
          {title}
        </TextView>
      </Button>
    </Block>
  );
};

const ItemField = ({ icon, title, desc }) => {
  return (
    <Button>
      <Block
        direction="row"
        borderRadius={12}
        shadow
        color="#fff"
        padding={6}
        paddingHorizontal={12}
        style={{ marginTop: 12 }}
      >
        <Image style={styles.img_item} resizeMode="contain" source={icon} />
        <Block padding={12} style={styles.field_con}>
          <TextView size={16} bold>
            {title}
          </TextView>
          <TextView style={styles.textDesc}>{desc}</TextView>
        </Block>
        <Button style={styles.btn}>
          <Feather name="chevron-right" color={Colors.blue} size={30} />
        </Button>
      </Block>
    </Button>
  );
};

const DetailScreen = () => {
  return (
    <ScrollView>
      <Block block color="#fafafa">
        <Block height={300} color={Colors.blue} style={styles.bg}>
          <Block style={styles.wrapperImage}>
            <Image
              style={styles.doctor}
              source={require("../img/DrMask.png")}
            />
          </Block>
        </Block>
        <Block style={styles.containerHeader}>
          <Image style={styles.img} source={require("../img/virus.png")} />
        </Block>
        <Block padding={10}>
          <TextView h6>Symptoms</TextView>
          <Block direction="row" paddingVertical={10}>
            <Item icon={require("../img/headache.png")} title="Headache" />
            <Block width={10} />
            <Item icon={require("../img/cough.png")} title="Cough" />
            <Block width={10} />
            <Item icon={require("../img/fever.png")} title="Fever" />
          </Block>
        </Block>
        <Block padding={10}>
          <TextView h6>Prevention Tips</TextView>
          <Block>
            <ItemField
              title="Wear a face mask"
              desc="Wearing cloth masks can help  reduce the spread of the
              Coronavirus (COVID-19) by people who are infected but don't realize it."
              icon={require("../img/wearMask.png")}
            />
            <ItemField
              title="Wash your hands"
              desc="Handwashing remains the No. 1 tip for preventing the spread of Coronavirus (COVID-19). It’s common sense and it works."
              icon={require("../img/washHands.png")}
            />
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 300,
  },
  doctor: {
    position: "absolute",
    top: 100,
    left: -30,
  },
  wrapperImage: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: W,
    height: 300,
  },
  bg: {
    position: "absolute",
    width: 1000,
    height: 1000,
    top: -(930 - W / 2),
    alignSelf: "center",
    borderRadius: 1000,
    overflow: "hidden",
  },
  containerHeader: {
    position: "relative",
  },
  map: {
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
  },

  img_item: {
    width: (1.2 * W) / 3,
    height: (1.2 * W) / 3,
  },
  field_con: {
    position: "absolute",
    width: (2 * W) / 3,
    left: W / 3 + 10,
    top: 10,
    paddingVertical: 10,
  },
  textDesc: {
    lineHeight: 20,
    marginTop: 10,
    maxWidth: (2 * W) / 3.75,
  },
  btn: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
