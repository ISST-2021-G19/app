import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer, Stack } from 'edoc/modules/navigation'
import { AuthProvider } from 'edoc/modules/auth'
import { SubjectListScreen } from 'edoc/modules/subjectList'
import { SubjectSurveyScreen } from 'edoc/modules/subjectSurvey'
import { store } from 'edoc/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SubjectList" component={SubjectListScreen} />
            <Stack.Screen name="SubjectSurvey" component={SubjectSurveyScreen} />
          </Stack.Navigator>
         </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
