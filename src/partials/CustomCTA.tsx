import { useFormspark } from '@formspark/use-formspark';
import { useState } from 'react';

function CustomCTA() {
  const [submit, submitting] = useFormspark({
    formId: 'ZrsyovVug',
  });
  const [message, setMessage] = useState('');
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        alert(message);
        // await submit({ message });
      }}
    >
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={submitting}>
        Send
      </button>
    </form>
  );
}

export { CustomCTA };
