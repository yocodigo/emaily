// SurveyField contains logic to render a single
// label and textt input

import React from 'react';

export default ({ input }) => {
    
    return (
        <div>
            <input {...input} />
        </div>
    );
};