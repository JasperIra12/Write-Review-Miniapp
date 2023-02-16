import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import type {
  WriteReviewDataIn,
  WriteReviewDataLoad,
  WriteReviewDataOut,
} from 'src/types';
import CustomTextInput from '../component/CustomTextInput';
import { AirbnbRating } from 'react-native-ratings';

type Props = {
  dataLoad: WriteReviewDataLoad;
  dataIn: WriteReviewDataIn;
  dataOut: WriteReviewDataOut;
};

const WriteReviewScreen = ({ dataLoad, dataIn, dataOut }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={[styles.headerText, dataIn?.headerTextStyle]}>
          {dataIn?.headerText || 'Post Review'}
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ fontSize: 14 }}>You are Reviewing for </Text>
          <Text style={[styles.productTextStyle, dataIn.productTextStyle]}>
            {dataLoad.productName}
          </Text>
        </View>
        <View
          style={[
            { alignItems: 'baseline', marginTop: 30, marginBottom: 10 },
            dataIn.ratingLabelStyle,
          ]}
        >
          <Text style={styles.ratingLabelStyle}>YOUR RATING</Text>
          <AirbnbRating
            // count={3}
            defaultRating={5}
            size={27}
            showRating={false}
          />
        </View>
        <View>
          <CustomTextInput
            inputLabel={dataIn.textInputStyle?.firstInputLabel || 'NICKNAME'}
            inputStyle={[dataIn.textInputStyle?.inputStyle]}
            placeholder={
              dataIn?.textInputStyle?.firstInputPlaceholder || 'Enter nickname'
            }
            placeholderTextColor={dataIn.textInputStyle?.placeholderTextColor}
            multiline={dataIn.textInputStyle?.multiline || false}
            textAlignVertical={
              dataIn.textInputStyle?.textAlignVertical || 'center'
            }
          />
          <CustomTextInput
            inputLabel={
              dataIn.textInputStyle?.secondInputLabel || 'REVIEW TITLE'
            }
            inputStyle={[dataIn.textInputStyle?.inputStyle]}
            placeholder={
              dataIn?.textInputStyle?.secondInputPlaceholder ||
              'The summary line of your review'
            }
            placeholderTextColor={dataIn.textInputStyle?.placeholderTextColor}
            multiline={dataIn.textInputStyle?.multiline || false}
            textAlignVertical={
              dataIn.textInputStyle?.textAlignVertical || 'center'
            }
          />
          <CustomTextInput
            inputLabel={
              dataIn.textInputStyle?.thirdInputLabel || 'REVIEW DESCRIPTION'
            }
            inputStyle={[{ height: 105 }, dataIn.textInputStyle?.inputStyle]}
            placeholder={
              dataIn?.textInputStyle?.thirdInputPlaceholder ||
              'Tip: Explain why you like or dislike the product and if it met your expectations.'
            }
            placeholderTextColor={dataIn.textInputStyle?.placeholderTextColor}
            multiline={dataIn.textInputStyle?.multiline || true}
            textAlignVertical={
              dataIn.textInputStyle?.textAlignVertical || 'top'
            }
          />
        </View>
        <TouchableOpacity
          style={[styles.submitButtonStyle, dataIn.submitButtonStyle]}
        >
          <Text
            style={[styles.submitButtonLabel, dataIn.submitButtonTextStyle]}
          >
            Submit Review
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    color: '#818792',
    fontWeight: '400',
    paddingVertical: 5,
  },
  productTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    top: -1.5,
  },
  inputLabelStyle: {
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  ratingLabelStyle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 7,
  },
  submitButtonLabel: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#ffffff',
  },
  submitButtonStyle: {
    backgroundColor: '#80AF46',
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 180,
    borderRadius: 5,
    marginTop: 40,
  },
});
export default WriteReviewScreen;
