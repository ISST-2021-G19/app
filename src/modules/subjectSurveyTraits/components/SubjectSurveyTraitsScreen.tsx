import React, { useEffect, useState } from "react";
import * as S from "./SubjectSurveyTraits.style";

function SubjectSurveyTraitsScreen() {
  const [atribute, setAtribute] = useState("");

  const AZUL_BASE = "#2368AF";
  const GRADIENTE1 = "#679ECD";

  const [color1, setColor1] = useState(AZUL_BASE);
  const [color2, setColor2] = useState(AZUL_BASE);
  const [color3, setColor3] = useState(AZUL_BASE);
  const [color4, setColor4] = useState(AZUL_BASE);
  const [color5, setColor5] = useState(AZUL_BASE);
  const [color6, setColor6] = useState(AZUL_BASE);
  const [color7, setColor7] = useState(AZUL_BASE);
  const [color8, setColor8] = useState(AZUL_BASE);
  const [color9, setColor9] = useState(AZUL_BASE);
  const [color10, setColor10] = useState(AZUL_BASE);

  useEffect(() => {
    if (atribute.toLowerCase().includes("cercano")) {
      setColor1(GRADIENTE1);
    } else {
      setColor1(AZUL_BASE);
    }
    if (atribute.toLowerCase().includes("impuntual")) {
      setColor2(GRADIENTE1);
    } else {
      setColor2(AZUL_BASE);
    }
    if (atribute.toLowerCase().includes("accesible para tutorías")) {
      setColor3(GRADIENTE1);
    } else {
      setColor3(AZUL_BASE);
    }
    if (atribute.toLowerCase().includes("clases amenas")) {
      setColor4(GRADIENTE1);
    } else {
      setColor4(AZUL_BASE);
    }
    if (atribute.toLowerCase().includes("desorganizado")) {
      setColor5(GRADIENTE1);
    } else {
      setColor5(AZUL_BASE);
    }
    if (atribute.toLowerCase().includes("se prepara las clases")) {
      setColor6(GRADIENTE1);
    } else {
      setColor6(AZUL_BASE);
    }
    if (atribute.toLowerCase().includes("se pasa de la hora")) {
      setColor7(GRADIENTE1);
    } else {
      setColor7(AZUL_BASE);
    }
    if (atribute.toLowerCase().includes("clases poco dinámicas")) {
      setColor8(GRADIENTE1);
    } else {
      setColor8(AZUL_BASE);
    }
    if (atribute.toLowerCase().includes("buenos apuntes")) {
      setColor9(GRADIENTE1);
    } else {
      setColor9(AZUL_BASE);
    }
    if (atribute.toLowerCase().includes("poco material de estudio")) {
      setColor10(GRADIENTE1);
    } else {
      setColor10(AZUL_BASE);
    }
  });

  return (
    <S.Container>
      <S.ContainerRow>
        <S.ButtonTraits
          style={{ backgroundColor: color1 }}
          onPress={() => {
            setAtribute(atribute + "Cercano, ");
            setColor1(AZUL_BASE);
          }}
        >
          Cercano
        </S.ButtonTraits>
        <S.ButtonTraits
          style={{ backgroundColor: color2 }}
          onPress={() => {
            setAtribute(atribute + "Impuntual, ");
            setColor2(AZUL_BASE);
          }}
        >
          Impuntual
        </S.ButtonTraits>
      </S.ContainerRow>
      <S.ContainerRow>
        <S.ButtonTraits
          style={{ backgroundColor: color3 }}
          onPress={() => {
            setAtribute(atribute + "Accesible para tutorías, ");
            setColor2(AZUL_BASE);
          }}
        >
          Accesible para tutorías
        </S.ButtonTraits>
        <S.ButtonTraits
          style={{ backgroundColor: color4 }}
          onPress={() => {
            setAtribute(atribute + "Clases amenas, ");
            setColor2(AZUL_BASE);
          }}
        >
          Clases amenas
        </S.ButtonTraits>
      </S.ContainerRow>
      <S.ContainerRow>
        <S.ButtonTraits
          style={{ backgroundColor: color5 }}
          onPress={() => {
            setAtribute(atribute + "Desorganizado, ");
            setColor2(AZUL_BASE);
          }}
        >
          Desorganizado
        </S.ButtonTraits>
        <S.ButtonTraits
          style={{ backgroundColor: color6 }}
          onPress={() => {
            setAtribute(atribute + "Se prepara las clases, ");
            setColor2(AZUL_BASE);
          }}
        >
          Se prepara las clases
        </S.ButtonTraits>
      </S.ContainerRow>
      <S.ContainerRow>
        <S.ButtonTraits
          style={{ backgroundColor: color7 }}
          onPress={() => {
            setAtribute(atribute + "Se pasa de la hora, ");
            setColor2(AZUL_BASE);
          }}
        >
          Se pasa de la hora
        </S.ButtonTraits>
        <S.ButtonTraits
          style={{ backgroundColor: color8 }}
          onPress={() => {
            setAtribute(atribute + "Clases poco dinámicas, ");
            setColor2(AZUL_BASE);
          }}
        >
          Clases aburridas
        </S.ButtonTraits>
      </S.ContainerRow>
      <S.ContainerRow>
        <S.ButtonTraits
          style={{ backgroundColor: color9 }}
          onPress={() => {
            setAtribute(atribute + "Buenos apuntes, ");
            setColor2(AZUL_BASE);
          }}
        >
          Buenos apuntes
        </S.ButtonTraits>
        <S.ButtonTraits
          style={{ backgroundColor: color10 }}
          onPress={() => {
            setAtribute(atribute + "Poco material de estudio, ");
            setColor2(AZUL_BASE);
          }}
        >
          Poco material de estudio
        </S.ButtonTraits>
      </S.ContainerRow>
      <S.ContainerRow>
        <S.CommentsBox
          multiline={true}
          numberOfLines={4}
          placeholder="Añada comentarios"
          onChangeText={setAtribute}
          value={atribute}
        ></S.CommentsBox>
      </S.ContainerRow>
      <S.ContainerRow>
        <S.GoBackButton>Atrás</S.GoBackButton>
        <S.SubmitButton>Enviar</S.SubmitButton>
      </S.ContainerRow>
    </S.Container>
  );
}

export { SubjectSurveyTraitsScreen };
