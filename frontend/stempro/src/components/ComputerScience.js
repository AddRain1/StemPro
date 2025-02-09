import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComputerScience.css';

export const ComputerScience = () => {
    const navigate = useNavigate();

    // list of problems
    const problems = [
        { id: 1, title: "Reverse a String" },
        { id: 2, title: "Find the Largest Element in an Array" },
        { id: 3, title: "Binary Search Implementation" },
        { id: 4, title: "Check if a Number is Prime" },
        { id: 5, title: "Find the Fibonacci Sequence" },
        { id: 6, title: "Merge Two Sorted Arrays" },
        { id: 7, title: "Implement a Stack Using Queues" },
        { id: 8, title: "Find the First Non-Repeating Character" },
        { id: 9, title: "Detect a Cycle in a Linked List" },
        { id: 10, title: "Solve the Two Sum Problem" },
    ];

    const handleProblemClick = (id) => {
        navigate(`/computerscience/problem/${id}`);
    }

    return (
        <div className="computer-science-container">
            <h1 className="computer-science-title">Computer Science Problems</h1>
            <div classname="computer-science-problems">
                {problems.map((problem) => (
                        <div key={problem.id} className="computer-science-problem" onClick={() => handleProblemClick(problem.id)}>
                            {problem.title}
                        </div>
                ))}
            </div>
        </div>
    );
};