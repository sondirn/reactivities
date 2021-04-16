import React from 'react';
import {Button, Header, Segment} from "semantic-ui-react";
import axios from 'axios';

export default function TestErrors() {
    const baseUrl = 'http://localhost:5000/api/'

    function handleNotFound() {
        axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
    }

    function handleBadRequest() {
        axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
    }

    function handleServerError() {
        axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
    }

    function handleUnauthorised() {
        axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
    }

    function handleBadGuid() {
        axios.get(baseUrl + 'activities/notaguid').catch(err => console.log(err.response));
    }

    function handleValidationError() {
        axios.post(baseUrl + 'activities', {}).catch(err => console.log(err));
    }

    return (
        <>
            <Header as='h1' content='Test Error component' />
            <Segment>
                <Button.Group attached widths='7'>
                    <Button attached onClick={handleNotFound} content='Not Found' basic primary />
                    <Button attached onClick={handleBadRequest} content='Bad Request' basic primary />
                    <Button attached onClick={handleValidationError} content='Validation Error' basic primary />
                    <Button attached onClick={handleServerError} content='Server Error' basic primary />
                    <Button attached onClick={handleUnauthorised} content='Unauthorised' basic primary />
                    <Button attached onClick={handleBadGuid} content='Bad Guid' basic primary />
                </Button.Group>
            </Segment>
        </>
    )
}