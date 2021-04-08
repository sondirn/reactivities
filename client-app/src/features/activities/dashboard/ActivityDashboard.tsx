import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivitiesList from './ActivitiesList';

//create properties interface
//we need to specify what properties
//we are passing into this jsx object
interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    editMode: boolean;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit:(activity: Activity) => void;
    deleteActivity:(id: string) => void;
}

//function and pass props
//Note: we can destructure properties like this
//{activities}: Props - this destructures activities property itself
function ActivityDashboard({ activities, selectedActivity,
    selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity }: Props) {
    return (
        <>
            <Grid>
                <Grid.Column width='10'>
                    <ActivitiesList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
                </Grid.Column>
                <Grid.Column width='6'>
                    
                    {selectedActivity && !editMode &&
                        <ActivityDetails
                            activity={selectedActivity}
                            cancelSelectActivity={cancelSelectActivity}
                            openForm={openForm}
                            />}

                    {editMode === true &&
                        <ActivityForm
                            closeForm={closeForm}
                            activity={selectedActivity}
                            createOrEdit={createOrEdit}
                        />}

                </Grid.Column>
            </Grid>
        </>
    )
}

export default ActivityDashboard;