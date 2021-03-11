import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { Stack } from 'edoc/modules/navigation'
import { AuthProvider } from 'edoc/modules/auth'
import { SubjectListScreen } from 'edoc/modules/subjectList'
import { SubjectSurveyScreen } from 'edoc/modules/subjectSurvey'
import { Provider } from 'react-redux';
import { store } from 'edoc/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator>
            <Stack.Screen name="SubjectList" component={SubjectListScreen} />
            <Stack.Screen name="SubjectSurvey" component={SubjectSurveyScreen} />
          </Stack.Navigator>
         </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
