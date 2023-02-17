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
import { useViewModel } from './useViewModel';

type Props = {
  dataLoad: WriteReviewDataLoad;
  dataIn: WriteReviewDataIn;
  dataOut: WriteReviewDataOut;
};

const WriteReviewScreen = ({ dataLoad, dataIn, dataOut }: Props) => {
  const {
    handleFormSubmit,
    handleRatingChange,
    handleInputChange,
    errorMessages,
  } = useViewModel({
    dataIn,
    dataLoad,
    dataOut,
  });
  return (
    <View style={[styles.container, dataIn.formContainerStyle]}>
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
          style={{ alignItems: 'baseline', marginTop: 30, marginBottom: 10 }}
        >
          <Text style={[styles.ratingLabelStyle, dataIn.ratingLabelStyle]}>
            {dataIn.ratingLabel || 'YOUR RATING'}
          </Text>
          <AirbnbRating
            defaultRating={0}
            size={27}
            showRating={false}
            onFinishRating={handleRatingChange}
          />
          <Text style={{ color: 'red' }}>{errorMessages.rating}</Text>
        </View>
        <View>
          {dataIn.textInputStyle?.firstInputIsShow === false ? (
            <></>
          ) : (
            <CustomTextInput
              inputLabel={
                dataIn.textInputStyle?.firstInputLabelName || 'Nickname'
              }
              inputLabelStyle={[
                styles.inputLabelStyle,
                dataIn.textInputStyle?.firstInputLabelStyle,
              ]}
              inputStyle={[dataIn.textInputStyle?.firstInputStyle]}
              placeholder={
                dataIn?.textInputStyle?.firstInputPlaceholder ||
                'Enter nickname'
              }
              placeholderTextColor={dataIn.textInputStyle?.placeholderTextColor}
              multiline={dataIn.textInputStyle?.multiline || false}
              textAlignVertical={
                dataIn.textInputStyle?.textAlignVertical || 'center'
              }
              onChangeText={(value: string) =>
                handleInputChange('nickName', value)
              }
              error={errorMessages.nickName}
            />
          )}
          {dataIn.textInputStyle?.secondInputIsShow === false ? (
            <></>
          ) : (
            <CustomTextInput
              inputLabel={
                dataIn.textInputStyle?.secondInputLabelName || 'Review Title'
              }
              inputLabelStyle={[
                styles.inputLabelStyle,
                dataIn.textInputStyle?.secondInputLabelStyle,
              ]}
              inputStyle={[dataIn.textInputStyle?.secondInputStyle]}
              placeholder={
                dataIn?.textInputStyle?.secondInputPlaceholder ||
                'The summary line of your review'
              }
              placeholderTextColor={dataIn.textInputStyle?.placeholderTextColor}
              multiline={dataIn.textInputStyle?.multiline || false}
              textAlignVertical={
                dataIn.textInputStyle?.textAlignVertical || 'center'
              }
              onChangeText={(value: string) =>
                handleInputChange('reviewTitle', value)
              }
              error={errorMessages.reviewTitle}
            />
          )}
          {dataIn.textInputStyle?.thirdInputIsShow === false ? (
            <></>
          ) : (
            <CustomTextInput
              inputLabel={
                dataIn.textInputStyle?.thirdInputLabelName ||
                'Review Description'
              }
              inputLabelStyle={[
                styles.inputLabelStyle,
                dataIn.textInputStyle?.thirdInputLabelStyle,
              ]}
              inputStyle={[
                { height: 105 },
                dataIn.textInputStyle?.thirdInputStyle,
              ]}
              placeholder={
                dataIn?.textInputStyle?.thirdInputPlaceholder ||
                'Tip: Explain why you like or dislike the product and if it met your expectations.'
              }
              placeholderTextColor={dataIn.textInputStyle?.placeholderTextColor}
              multiline={dataIn.textInputStyle?.multiline || true}
              textAlignVertical={
                dataIn.textInputStyle?.textAlignVertical || 'top'
              }
              onChangeText={(value: string) =>
                handleInputChange('reviewDescription', value)
              }
              error={errorMessages.reviewDescription}
            />
          )}
        </View>
        <TouchableOpacity
          onPress={handleFormSubmit}
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
    textTransform: 'uppercase',
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
