import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  //loading page while app is loading data from server
  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  //handle view
  return (
    <>
      
      <NavBar />
      <Container style={{marginTop: '5em'}}>
        {/* pass in activities as a param */}
        
        <ActivityDashboard />
      </Container>

    </>
  );
}

export default observer(App);
