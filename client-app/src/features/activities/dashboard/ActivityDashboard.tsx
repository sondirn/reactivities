import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivitiesList from './ActivitiesList';

//create properties interface
//we need to specify what properties
//we are passing into this jsx object

//function and pass props
//Note: we can destructure properties like this
//{activities}: Props - this destructures activities property itself
function ActivityDashboard() {

    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;

    return (
        <>
            <Grid>
                <Grid.Column width='10'>
                    <ActivitiesList/>
                </Grid.Column>
                <Grid.Column width='6'>

                    {selectedActivity && !editMode &&
                        <ActivityDetails />
                    }

                    {editMode &&
                        <ActivityForm />}

                </Grid.Column>
            </Grid>
        </>
    )
}

export default observer(ActivityDashboard);