import styled from "styled-components/native";
import { Button as BaseButton } from "edoc/components";
import { TextInput as BaseTextInput } from "edoc/components";
//import { Container as BaseContainer } from "edoc/components";

export const ButtonTraits = styled(BaseButton)`
  padding: 16px;
  background-color: #3792cb;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 0.875;
  word-wrap: break-word;
  width: 200px; // only for IE8
  max-width: 100%;
  margin-left: 8px;
  margin-top: 8px;
`;

export const CommentsBox = styled(BaseTextInput)`
  padding: 16px;
  border: 1px solid gray;
  width: 400px;
  max-width: 100%;
  margin-left: 8px;
  margin-top: 8px;
`;
