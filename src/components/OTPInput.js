import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components/native';

export const OTPInputSection = styled.View`
  justify-content: center;
  align-items: center;
  margin-vertical: 30px;
`;

export const HiddenTextInput = styled.TextInput`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
`;

export const OTPInputContainer = styled.Pressable`
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
`;

export const OTPInputStyled = styled.View`
  background-color: white;
  min-width: 12%;
  border-width: 2px;
  border-radius: 5px;
  padding: 12px;
`;

export const OTPInputText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const OTPInputFocused = styled(OTPInputStyled)`
  border-color: #24baef;
  background-color: #24baef;
`;

const OTPInput = ({setPinReady, code, setCode, maxLength}) => {
  const codeDigitsArray = new Array(maxLength).fill(0);
  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  const textInputRef = useRef(null);

  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  };

  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => setPinReady(false);
  }, [code]);

  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  };

  const toCodeDigitInput = (_value, index) => {
    const emptyInputChar = '';
    const digit = code[index] || emptyInputChar;

    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
    const StyledOTPInput =
      inputContainerIsFocused && isDigitFocused
        ? OTPInputFocused
        : OTPInputStyled;
    return (
      <StyledOTPInput key={index}>
        <OTPInputText>{digit}</OTPInputText>
      </StyledOTPInput>
    );
  };
  return (
    <OTPInputSection>
      <OTPInputContainer onPress={handleOnPress}>
        {codeDigitsArray.map(toCodeDigitInput)}
      </OTPInputContainer>
      <HiddenTextInput
        value={code}
        onChangeText={setCode}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        ref={textInputRef}
        onBlur={handleOnBlur}
      />
    </OTPInputSection>
  );
};

export default OTPInput;

const styles = StyleSheet.create({});
