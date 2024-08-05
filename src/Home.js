import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Import your Firebase configuration
import './App.css';
import { useNavigate } from 'react-router-dom';

export const Home = ({onLogout}) => {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout(); // Call the onLogout function passed from the parent component
        navigate('/');
    }


    useEffect(() => {
        const fetchContent = async () => {
            try {
                const contentCollection = collection(db, 'content');
                const contentSnapshot = await getDocs(contentCollection);
                const contentList = contentSnapshot.docs.map(doc => doc.data());
                setContent(contentList);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching content: ", err);
            }
        };

        fetchContent();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='home-container'>
            <h2>User Feed</h2>
            <div className='content-feed'>
                {content.map((item, index) => (
                    <div key={index} className='content-item'>
                        {item.type === 'text' && <p>{item.text}</p>}
                        {item.type === 'image' && <img src={item.url} alt='Content' />}
                        {item.type === 'video' && <video src={item.url} controls />}
                    </div>
                ))}
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

