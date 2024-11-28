import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

function Input(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;

    return (
        <div className="flex flex-col mb-12">
            <div className="flex justify-center items-center space-x-6 mb-5">
                <motion.input 
                    value={todoValue} 
                    onChange={(e) => setTodoValue(e.target.value)} 
                    placeholder="Mark your trail ahead..."
                    className="text-lg sm:text-sm text-gray-100 bg-gradient-to-b from-green-900 to-gray-800 border-2 border-gold px-6 py-3 focus:outline-none focus:ring-4 focus:ring-yellow-500 shadow-lg shadow-gray-800 transition-all ease-in-out"
                    style={{
                        clipPath: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)", 
                    }}
                    animate={{ scale: 1.05 }}
                    initial={{ scale: 1 }}
                />
                
                <motion.button
                    onClick={() => {
                        handleAddTodos(todoValue);
                        setTodoValue('');
                    }}
                    className="text-lg sm:text-sm text-gray-200 bg-gradient-to-b from-orange-700 to-gray-800 border-2 border-gold px-8 py-3 focus:outline-none focus:ring-4 focus:ring-yellow-500 hover:bg-yellow-400 transition-all ease-in-out"
                    style={{
                        clipPath: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
                    }}
                    animate={{ scale: 1.05 }}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Mark
                </motion.button>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-base sm:text-sm">Hearken: Thy quests shall endure, even shouldst thou refresh thy page.</p>
            </div>
        </div>
        
    );
}

export default Input;
