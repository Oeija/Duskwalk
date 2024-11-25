import React from 'react';

function CardRandom(props) {
    const { children, index } = props;

    return (
        <div className="flex flex-col p-6 bg-white text-black rounded-md border-4 border-green-950 mb-4 max-w-[80%] mx-auto space-y-4">
            <div className="text-xl tracking-wide">
                {children}
            </div>
        </div>
    );
}

export default CardRandom;


