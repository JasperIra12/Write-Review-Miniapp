# write-review-miniapp

bootcamp

## Installation

```sh
npm install write-review-miniapp
```

## Changelogs

```Changes per version
v0.1.8 - changes for isShow default to true
v0.1.7 - changes in dataIn and dataOut for validation
v0.1.6 - changes in dataIn Props
v0.1.5 - changes in dataLoad and dataIn Props
v0.1.4 - changes in dataOut
v0.1.3 - changes in dataIn Props
v0.1.2 - changes in readme
v0.1.1 - add the dataIn, dataLoad, and dataOut props in readme
v0.1.0 - miniapp first publish
```

## Write Review Mini App DataIn Props

| Prop                     | Required | Type         | Description                      |
| :----------------------- | :------- | :----------- | :------------------------------- |
| **`formContainerStyle`** | No       | `View Style` | View style for Write Review form |

## headerStyle DataIn Props

| Prop                  | Required | Type         | Description                    |
| :-------------------- | :------- | :----------- | :----------------------------- |
| **`headerText`**      | No       | `string`     | label or text for Header Title |
| **`headerTextStyle`** | No       | `Text Style` | Text style for Header Title    |

## productStyle DataIn Props

| Prop                           | Required | Type         | Description                         |
| :----------------------------- | :------- | :----------- | :---------------------------------- |
| **`productReviewerText`**      | No       | `string`     | reviewing label or text of products |
| **`productReviewerTextStyle`** | No       | `Text Style` | Text style for reviewing text       |
| **`productTextStyle`**         | No       | `Text Style` | Text Style of the Products          |

## submitButtonStyle DataIn Props

| Prop                        | Required | Type         | Description                          |
| :-------------------------- | :------- | :----------- | :----------------------------------- |
| **`buttonText`**            | No       | `string`     | submit button label or text          |
| **`buttonStyle`**           | No       | `View Style` | View style for submit button         |
| **`submitButtonTextStyle`** | No       | `Text Style` | Text Style of the submit button text |

## ratingStyle DataIn Props

| Prop                             | Required | Type           | Description                                                                                                       |
| :------------------------------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| **`ratingLabel`**                | No       | `string`       | text for rating label                                                                                             |
| **`ratingLabelStyle`**           | No       | `Text Style`   | Text style for the rating label text                                                                              |
| **`ratingIconSize`**             | No       | `number`       | the size of the Star icon                                                                                         |
| **`selectedRatingIconColor`**    | No       | `string`       | color of a selected Star icon                                                                                     |
| **` unSelectedRatingIconColor`** | No       | `string`       | color of a unselected Star icon                                                                                   |
| **`showRating`**                 | No       | `boolean`      | if true it will show the value of selected star icon, the default is ("Terrible", "Bad", "Okay", "Good", "Great") |
| **`ratingTextValue`**            | No       | `string array` | use to overide the default showRating value                                                                       |
| **` ratingTextValueColor`**      | No       | `string`       | color of the rating text                                                                                          |
| **` ratingTextValueSize`**       | No       | `number`       | size of the rating text                                                                                           |

## nicknameStyle DataIn Props

| Prop                       | Required | Type         | Description                                                                |
| :------------------------- | :------- | :----------- | :------------------------------------------------------------------------- | -------- | ------ | --------------------------------------------------------------------------- |
| **`inputStyle`**           | No       | `Text Style` | Text style for nickname input field                                        |
| **`inputLabel`**           | No       | `string`     | text for the nickname label                                                |
| **`inputLabelStyle`**      | No       | `Text Style` | Text Style for the nickname label text                                     |
| **`placeholder`**          | No       | `string`     | text that displayed if value is empty                                      |
| **`placeholderTextColor`** | No       | `string`     | color for placeholder text                                                 |
| **` isShow`**              | No       | `boolean`    | default is true, it can sset to false if nickname field is not needed      |
| **`multiline`**            | No       | `boolean`    | If true, the text input can be multiple lines. The default value is false. |
| **`textAlignVertical`**    | No       | `'center'    | 'auto'                                                                     | 'bottom' | 'top'` | Align the input text to the center, bottom, or top sides of the input field |

## reviewTitleStyle DataIn Props

| Prop                       | Required | Type         | Description                                                                |
| :------------------------- | :------- | :----------- | :------------------------------------------------------------------------- | -------- | ------ | --------------------------------------------------------------------------- |
| **`inputStyle`**           | No       | `Text Style` | Text style for review title input field                                    |
| **`inputLabel`**           | No       | `string`     | text for the review title label                                            |
| **`inputLabelStyle`**      | No       | `Text Style` | Text Style for the review title label text                                 |
| **`placeholder`**          | No       | `string`     | text that displayed if value is empty                                      |
| **`placeholderTextColor`** | No       | `string`     | color for placeholder text                                                 |
| **` isShow`**              | No       | `boolean`    | default is true, it can sset to false if review title field is not needed  |
| **`multiline`**            | No       | `boolean`    | If true, the text input can be multiple lines. The default value is false. |
| **`textAlignVertical`**    | No       | `'center'    | 'auto'                                                                     | 'bottom' | 'top'` | Align the input text to the center, bottom, or top sides of the input field |

## reviewDescriptionStyle DataIn Props

| Prop                       | Required | Type         | Description                                                                             |
| :------------------------- | :------- | :----------- | :-------------------------------------------------------------------------------------- | -------- | ------ | --------------------------------------------------------------------------- |
| **`inputStyle`**           | No       | `Text Style` | Text style for review description input field                                           |
| **`inputLabel`**           | No       | `string`     | text for the review description label                                                   |
| **`inputLabelStyle`**      | No       | `Text Style` | Text Style for the review description label text                                        |
| **`placeholder`**          | No       | `string`     | text that displayed if value is empty                                                   |
| **`placeholderTextColor`** | No       | `string`     | color for placeholder text                                                              |
| **` isShow`**              | No       | `boolean`    | default is true, it can sset to false if review description field is not needed         |
| **`multiline`**            | No       | `boolean`    | If true, the text input can be multiple lines. The default value on this field is true. |
| **`textAlignVertical`**    | No       | `'center'    | 'auto'                                                                                  | 'bottom' | 'top'` | Align the input text to the center, bottom, or top sides of the input field |

## errorMessages DataIn Props

| Prop                                     | Required | Type     | Description                             |
| :--------------------------------------- | :------- | :------- | :-------------------------------------- |
| **`ratingErrorMessage`**                 | No       | `string` | error text for rating field             |
| **`nicknameFieldErrorMessage`**          | No       | `string` | error text for nickname field           |
| **`reviewTitleFieldErrorMessage`**       | No       | `string` | error text for review title field       |
| **`reviewDescriptionFieldErrorMessage`** | No       | `string` | error text for review description field |

## Write Review Data Load Props

| Prop              | Type   |
| :---------------- | :----- |
| **`id`**          | number |
| **`productName`** | string |
| **`type`**        | string |

## FilterList Data Out Props

| Prop                     | Required | Type         | Description          |
| :----------------------- | :------- | :----------- | :------------------- |
| **`WriteReviewDataOut`** | Yes      | `() => void` | Button onClick event |

## Example

Run the following commands

`npm run boostrap`:setup project by installing all dependencies and pods.
`npm run example run start`: start the Metro server for the example app.
`npm run example run android`: run the example app on Android.
`npm run example run ios`: run the example app on iOS.

## License

MIT
