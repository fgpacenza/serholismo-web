import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

function CustomCTA ()  {
  const [submit, submitting] = useFormspark({
    formId: "ZrsyovVug"
  });
  const [message, setMessage] = useState("");
  return (
    <form onSubmit={async (e) => {
        e.preventDefault();
        await submit({ message });
    }}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={submitting}>Send</button>
    </form>    
  );
};

export default CustomCTA;
