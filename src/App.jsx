import "./App.css";

import AddressInputGpt4oMini1 from "./address-components/AddressInput4oMini1";
import AddressInputGpt4oMini2 from "./address-components/AddressInput4oMini2";
import AddressInputGpt4oMini3 from "./address-components/AddressInput4oMini3";
import AddressInputGemini25Flash1 from "./address-components/AddressInputGemini25Flash1";
import AddressInputGemini25Flash2 from "./address-components/AddressInputGemini25Flash2";
import AddressInputDeepseek from "./address-components/AddressInputDeepseek";
import AddressInputGrok from "./address-components/AddressInputGrok";
import AddressInputMistral from "./address-components/AddressInputMistral";
import AddressInputGemini25Pro from "./address-components/AddressInputGemini25Pro";
import AddressInputLlama3370B from "./address-components/AddressInputLlama3370B";

function App() {
  const handleAddressSubmit = (addressData) => {
    console.log("Address Data Submitted:", addressData);
    // Here you can handle the submitted data (for example, sending to an API)
  };

  return (
    <>
      <h1>Address Input Form - GPT-4o Mini (OpenAI) variant 1</h1>
      <AddressInputGpt4oMini1 onSubmit={handleAddressSubmit} />
      <hr />

      <h1>Address Input Form - GPT-4o Mini (OpenAI) variant 2</h1>
      <AddressInputGpt4oMini2 onSubmit={handleAddressSubmit} />
      <hr />

      <h1>Address Input Form - GPT-4o Mini (OpenAI) variant 3</h1>
      <AddressInputGpt4oMini3 onSubmit={handleAddressSubmit} />
      <hr />

      <h1>Address Input Form - Gemini 2.5 (Google) variant 1</h1>
      <AddressInputGemini25Flash1 onSubmit={handleAddressSubmit} />
      <hr />

      <h1>Address Input Form - Gemini 2.5 (Google) variant 2</h1>
      <AddressInputGemini25Flash2 onSubmit={handleAddressSubmit} />
      <hr />

      <h1>Address Input Form - DeepSeek</h1>
      <AddressInputDeepseek onSubmit={handleAddressSubmit} />
      <hr />

      <h1>Address Input Form - Grok</h1>
      <AddressInputGrok onSubmit={handleAddressSubmit} />
      <hr />

      <h1>Address Input Form - Mistral</h1>
      <AddressInputMistral onSubmit={handleAddressSubmit} />
      <hr />

      <h1>Address Input Form - Gemini 2.5 Pro</h1>
      <AddressInputGemini25Pro onSubmit={handleAddressSubmit} />
      <hr />

      <h1>Address Input Form - Llama 3.3 70B</h1>
      <AddressInputLlama3370B onSubmit={handleAddressSubmit} />
      <hr />
    </>
  );
}

export default App;
