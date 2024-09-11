// import React from "react";
// import { ScrollView, Text, View } from "react-native";
// import styled from "styled-components/native";

// const ExerciseDetails = ({ route }) => {
//   const { exercise } = route.params;
//   const gifUrl = `http://192.168.2.13:5000/api/cached-images/${exercise.cachedgifurl}`;

//   return (
//     <StyledScrollView contentContainerStyle={{ padding: 20 }}>
//       <Title>{exercise.name}</Title>
//       <View style={{ flexDirection: "row", marginBottom: 20, marginRight: 30 }}>
//         <View style={{ flex: 1 }}>
//           <SectionTitle>Target Muscle</SectionTitle>
//           <SectionText>{exercise.target}</SectionText>
//           <SectionTitle>Secondary Muscles</SectionTitle>
//           <SectionText>{exercise.secondarymuscles.join(", ")}</SectionText>
//           <SectionTitle>Equipment</SectionTitle>
//           <SectionText>{exercise.equipment}</SectionText>
//           <SectionTitle>Instructions</SectionTitle>
//           {exercise.instructions.map((instruction, index) => (
//             <SectionText key={index}>
//               {index + 1}. {instruction}
//             </SectionText>
//           ))}
//         </View>
//         <View style={{ flex: 1 }}>
//           {exercise.gifurl && <ExerciseImage source={{ uri: gifUrl }} />}
//         </View>
//       </View>
//     </StyledScrollView>
//   );
// };

// const StyledScrollView = styled.ScrollView`
//   flex-grow: 1;
//   background-color: #1c1c1e;
// `;

// const Title = styled.Text`
//   font-size: 28px;
//   font-weight: bold;
//   color: #ffd700;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const ExerciseImage = styled.Image`
//   width: 100%;
//   height: 100%;
//   resize-mode: cover;
//   margin-bottom: 20px;
// `;

// const SectionTitle = styled.Text`
//   font-size: 20px;
//   font-weight: bold;
//   color: #ffd700;
//   margin-bottom: 10px;
// `;

// const SectionText = styled.Text`
//   font-size: 16px;
//   color: #ccc;
//   margin-bottom: 10px;
// `;

// export default ExerciseDetails;
import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

const ExerciseDetails = ({ route }) => {
  const { exercise } = route.params;
  const gifUrl = `http://localhost:5000/api/cached-images/${exercise.cachedgifurl}`;

  return (
    <StyledScrollView contentContainerStyle={{ padding: 20 }}>
      <Title>{exercise.name}</Title>
      <DetailsContainer>
        <InfoBox>
          <Section>
            <SectionTitle>Target Muscle</SectionTitle>
            <SectionText>{exercise.target}</SectionText>
          </Section>
          <Section>
            <SectionTitle>Secondary Muscles</SectionTitle>
            <SectionText>{exercise.secondarymuscles.join(", ")}</SectionText>
          </Section>
          <Section>
            <SectionTitle>Equipment</SectionTitle>
            <SectionText>{exercise.equipment}</SectionText>
          </Section>
          <Section>
            <SectionTitle>Instructions</SectionTitle>
            {exercise.instructions.map((instruction, index) => (
              <SectionText key={index}>
                {index + 1}. {instruction}
              </SectionText>
            ))}
          </Section>
        </InfoBox>
        <ImageContainer>
          {exercise.gifurl && <ExerciseImage source={{ uri: gifUrl }} />}
        </ImageContainer>
      </DetailsContainer>
    </StyledScrollView>
  );
};

const StyledScrollView = styled.ScrollView`
  flex-grow: 1;
  background-color: #121212;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #f5a623;
  margin-bottom: 20px;
  text-align: center;
`;

const DetailsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const InfoBox = styled.View`
  flex: 1;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  elevation: 8;
  margin-right: 20px;
`;

const Section = styled.View`
  margin-bottom: 15px;
`;

const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #f5a623;
  margin-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-color: #f5a623;
  padding-bottom: 5px;
`;

const SectionText = styled.Text`
  font-size: 18px;
  color: #e0e0e0;
  margin-bottom: 5px;
  line-height: 22px;
`;

const ImageContainer = styled.View`
  flex: 1;
  padding-left: 20px;
`;

const ExerciseImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  resize-mode: contain;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  elevation: 8;
`;

export default ExerciseDetails;
