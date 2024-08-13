import React, { useState, useEffect } from 'react';
import { getOneboxList, deleteThread } from '../services/api';
import Reply from './Reply';
import './Onebox.css';

function Onebox() {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    fetchThreads();
  }, []);

  const fetchThreads = async () => {
    const data = await getOneboxList();
    setThreads(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'D') {
      handleDelete();
    } else if (e.key === 'R') {
      setShowReply(true);
    }
  };

  const handleDelete = async () => {
    if (selectedThread) {
      await deleteThread(selectedThread.id);
      fetchThreads();
    }
  };

  return (
    <div className="onebox-container" onKeyPress={handleKeyPress} tabIndex="0">
      <div className="thread-list">
        {threads.map(thread => (
          <div key={thread.id} onClick={() => setSelectedThread(thread)} className="thread-item">
            {thread.subject}
          </div>
        ))}
      </div>
      {selectedThread && (
        <div className="thread-detail">
          <h2>{selectedThread.subject}</h2>
          <p>{selectedThread.body}</p>
        </div>
      )}
      {showReply && <Reply threadId={selectedThread?.id} onClose={() => setShowReply(false)} />}
    </div>
  );
}

export default Onebox;