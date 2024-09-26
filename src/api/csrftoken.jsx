import React from 'react';
import {csrfToken} from "./axios.js";

const CSRFTOKEN = () => {
    return (
        <input name="csrfmiddlewaretoken" value={csrfToken} type="hidden" />
    );
};

export default CSRFTOKEN;