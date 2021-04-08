import React, { useState } from "react";
import { View } from "react-native";
import * as S from "./SubjectSurveyTraits.style";

function SubjectSurveyTraitsScreen() {
  const [atribute, setAtribute] = useState("Hola");

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 1, ")}>
          Atributo 1
        </S.ButtonTraits>
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 2, ")}>
          Atributo 2
        </S.ButtonTraits>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 3, ")}>
          Atributo 3
        </S.ButtonTraits>
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 4, ")}>
          Atributo 4
        </S.ButtonTraits>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 5, ")}>
          Atributo 5
        </S.ButtonTraits>
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 6, ")}>
          Atributo 6
        </S.ButtonTraits>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 7, ")}>
          Atributo 7
        </S.ButtonTraits>
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 8, ")}>
          Atributo 8
        </S.ButtonTraits>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 9, ")}>
          Atributo 9
        </S.ButtonTraits>
        <S.ButtonTraits onPress={() => setAtribute(atribute + "Atributo 10, ")}>
          Atributo 10
        </S.ButtonTraits>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <S.CommentsBox
          multiline={true}
          numberOfLines={4}
          placeholder="Añada comentarios"
          onChangeText={setAtribute}
          value={atribute}
        ></S.CommentsBox>
      </View>
    </View>
  );
}

export { SubjectSurveyTraitsScreen };
