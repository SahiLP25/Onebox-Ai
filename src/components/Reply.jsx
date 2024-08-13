import React, { useState } from 'react';
import { sendReply } from '../services/api';
import TextEditor from './TextEditor';

function Reply({ threadId, onClose }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendReply(threadId, { from, to, subject, body });
    onClose();
  };

  return (
    <div className="reply-container">
      <form onSubmit={handleSubmit}>
        <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From" required />
        <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" required />
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
        <TextEditor value={body} onChange={setBody} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Reply;