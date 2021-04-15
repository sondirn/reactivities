import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';


//create properties interface
//we need to specify what properties
//we are passing into this jsx object

//function and pass props
//Note: we can destructure properties like this
//{activities}: Props - this destructures activities property itself
function ActivityDashboard() {

    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if(activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])

    //loading page while app is loading data from server
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />



    return (
        <>
            <Grid>
                <Grid.Column width='10'>
                    <ActivityList />
                </Grid.Column>
                <Grid.Column width='6'>
                    <h2>Activity Filters</h2>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default observer(ActivityDashboard);