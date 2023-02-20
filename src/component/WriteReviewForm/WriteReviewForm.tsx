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
import CustomTextInput from '../CustomButton/CustomTextInput';
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
    inputData,
    errorMessages,
  } = useViewModel({
    dataIn,
    dataLoad,
    dataOut,
  });
  return (
    <View style={[styles.container, dataIn.formContainerStyle]}>
      <ScrollView>
        <Text style={[styles.headerText, dataIn?.headerStyle?.headerTextStyle]}>
          {dataIn?.headerStyle?.headerText || 'Post Review'}
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text
            style={[
              { fontSize: 14 },
              dataIn.productStyle?.productReviewerTextStyle,
            ]}
          >
            {dataIn.productStyle?.productReviewerText ||
              'You are Reviewing for'}{' '}
          </Text>
          <Text
            style={[
              styles.productTextStyle,
              dataIn.productStyle?.productTextStyle,
            ]}
          >
            {dataLoad.productName}
          </Text>
        </View>
        <View
          style={{ alignItems: 'baseline', marginTop: 30, marginBottom: 10 }}
        >
          <Text
            style={[
              styles.ratingLabelStyle,
              dataIn.ratingStyle?.ratingLabelStyle,
            ]}
          >
            {dataIn.ratingStyle?.ratingLabel || 'YOUR RATING'}
          </Text>
          <AirbnbRating
            defaultRating={inputData.rating}
            size={dataIn.ratingStyle?.ratingIconSize || 27}
            selectedColor={dataIn.ratingStyle?.selectedRatingIconColor}
            unSelectedColor={dataIn.ratingStyle?.unSelectedRatingIconColor}
            reviews={dataIn.ratingStyle?.ratingTextValue}
            reviewColor={dataIn.ratingStyle?.ratingTextValueColor}
            reviewSize={dataIn.ratingStyle?.ratingTextValueSize}
            showRating={dataIn.ratingStyle?.showRating || false}
            onFinishRating={handleRatingChange}
          />
          <Text style={{ color: 'red' }}>{errorMessages.rating}</Text>
        </View>
        <View>
          {dataIn.textInputStyle?.nicknameStyle?.nicknameFieldIsShow ===
          false ? (
            <></>
          ) : (
            <CustomTextInput
              inputLabel={
                dataIn.textInputStyle?.nicknameStyle?.inputLabel || 'Nickname'
              }
              inputLabelStyle={[
                styles.inputLabelStyle,
                dataIn.textInputStyle?.nicknameStyle?.inputLabelStyle,
              ]}
              inputStyle={[dataIn.textInputStyle?.nicknameStyle?.inputStyle]}
              placeholder={
                dataIn?.textInputStyle?.nicknameStyle?.placeholder ||
                'Enter nickname'
              }
              placeholderTextColor={
                dataIn.textInputStyle?.nicknameStyle?.placeholderTextColor
              }
              multiline={
                dataIn.textInputStyle?.nicknameStyle?.multiline || false
              }
              textAlignVertical={
                dataIn.textInputStyle?.nicknameStyle?.textAlignVertical ||
                'center'
              }
              value={inputData.nickName}
              onChangeText={(value: string) =>
                handleInputChange('nickName', value)
              }
              error={errorMessages.nickName}
            />
          )}
          {dataIn.textInputStyle?.reviewTitleStyle?.reviewTitleFieldIsShow ===
          false ? (
            <></>
          ) : (
            <CustomTextInput
              inputLabel={
                dataIn.textInputStyle?.reviewTitleStyle?.inputLabel ||
                'Review Title'
              }
              inputLabelStyle={[
                styles.inputLabelStyle,
                dataIn.textInputStyle?.reviewTitleStyle?.inputLabelStyle,
              ]}
              inputStyle={[dataIn.textInputStyle?.reviewTitleStyle?.inputStyle]}
              placeholder={
                dataIn?.textInputStyle?.reviewTitleStyle?.placeholder ||
                'The summary line of your review'
              }
              placeholderTextColor={
                dataIn.textInputStyle?.reviewTitleStyle?.placeholderTextColor
              }
              multiline={
                dataIn.textInputStyle?.reviewTitleStyle?.multiline || false
              }
              textAlignVertical={
                dataIn.textInputStyle?.reviewTitleStyle?.textAlignVertical ||
                'center'
              }
              value={inputData.reviewTitle}
              onChangeText={(value: string) =>
                handleInputChange('reviewTitle', value)
              }
              error={errorMessages.reviewTitle}
            />
          )}
          {dataIn.textInputStyle?.reviewDescriptionStyle
            ?.reviewDescriptionFieldIsShow === false ? (
            <></>
          ) : (
            <CustomTextInput
              inputLabel={
                dataIn.textInputStyle?.reviewDescriptionStyle?.inputLabel ||
                'Review Description'
              }
              inputLabelStyle={[
                styles.inputLabelStyle,
                dataIn.textInputStyle?.reviewDescriptionStyle?.inputLabelStyle,
              ]}
              inputStyle={[
                { height: 105 },
                dataIn.textInputStyle?.reviewDescriptionStyle?.inputStyle,
              ]}
              placeholder={
                dataIn?.textInputStyle?.reviewDescriptionStyle?.placeholder ||
                'Tip: Explain why you like or dislike the product and if it met your expectations.'
              }
              placeholderTextColor={
                dataIn.textInputStyle?.reviewDescriptionStyle
                  ?.placeholderTextColor
              }
              multiline={
                dataIn.textInputStyle?.reviewDescriptionStyle?.multiline || true
              }
              textAlignVertical={
                dataIn.textInputStyle?.reviewDescriptionStyle
                  ?.textAlignVertical || 'top'
              }
              value={inputData.reviewDescription}
              onChangeText={(value: string) =>
                handleInputChange('reviewDescription', value)
              }
              error={errorMessages.reviewDescription}
            />
          )}
        </View>
        <TouchableOpacity
          onPress={handleFormSubmit}
          style={[
            styles.submitButtonStyle,
            dataIn.submitButtonStyle?.buttonStyle,
          ]}
        >
          <Text
            style={[
              styles.submitButtonLabel,
              dataIn.submitButtonStyle?.submitButtonTextStyle,
            ]}
          >
            {dataIn.submitButtonStyle?.buttonText || 'Submit Review'}
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
