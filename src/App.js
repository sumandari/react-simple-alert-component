import { Alert } from "./Alert";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Alert
        type="information"
        heading="Success"
        closeable
        onClose={() => console.log("closed")}
      >
        Everything is well
      </Alert>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
