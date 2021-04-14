import React from 'react';
import { Button, Card,Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';


function ActivityDetails() {

    const {activityStore} = useStore();

    const {selectedActivity: activity, openForm, cancelSelectedActivity: cancelSelectActivity} = activityStore;

    if(!activity) return <LoadingComponent />;

    return (
        <Card fluid>
            {/* USE TILDA FOR STRING CONTATONATION */}
            <Image src={`/assets/categoryImages/${activity?.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic onClick={() => openForm(activity.id)} color='blue' content='Edit'/>
                    <Button basic onClick={() => cancelSelectActivity()} color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetails;