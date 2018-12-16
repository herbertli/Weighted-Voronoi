import React from 'react';

interface Props {
    text: string
}

const Placeholder = (props: Props) => {
    return <div>
        {props.text}
    </div>
}

export default Placeholder;