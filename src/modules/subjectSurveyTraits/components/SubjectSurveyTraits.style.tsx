import styled from "styled-components/native";
import { Button as BaseButton } from "edoc/components";
import { TextInput as BaseTextInput } from "edoc/components";

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonTraits = styled(BaseButton)`
  padding: 16px;
  background-color: #2368af;
  border: 1px;
  border-color: #2368af;
  border-radius: 10px;
  font-size: 0.875;
  word-wrap: break-word;
  width: 200px;
  max-width: 100%;
  margin-left: 8px;
  margin-top: 8px;
  cursor: pointer;
  box-shadow: 0 2px 4px darkgray
  transition: all 0.2s ease-in
`;

export const SubmitButton = styled(BaseButton)`
  background-color: gray;
  border: none;
  padding: 16px 32px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 120px;
  margin-top: 20px;
`;

export const GoBackButton = styled(BaseButton)`
  background-color: gray;
  border: none;
  padding: 16px 32px;
  text-decoration: none;
  cursor: pointer;
  margin-right: 85px;
  margin-top: 20px;
`;

export const CommentsBox = styled(BaseTextInput)`
  padding: 16px;
  border: 1px solid gray;
  width: 400px;
  max-width: 100%;
  margin-left: 8px;
  margin-top: 15px;
`;
