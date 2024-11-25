import React from 'react';
import CardRandom from './CardRandom';

const RandomQuest = ({ fetchRandomQuests, randomQuests }) => {
    return (
        <div className="m-16">
            <div className="flex justify-center mb-8">
                <button
                    onClick={fetchRandomQuests}
                    className="p-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700"
                >
                    Generate Random 5-Minutes Quest
                </button>
            </div>

            <div className="flex flex-wrap justify-center">
                {randomQuests.length > 0 && randomQuests.map((quest, index) => (
                    <CardRandom key={index} >
                        <p>{quest}</p>
                    </CardRandom>
                ))}
            </div>
        </div>
    );
};

export default RandomQuest;

