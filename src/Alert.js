import { useState } from "react";

export function Alert({
  type = "information",
  heading,
  children,
  closeable,
  onClose
}) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠️" : "ℹ"}
        </span>
        <span>{heading}</span>
      </div>
      {closeable && (
        <button aria-label="Close">
          <span role="img" aria-label="Close" onClick={handleCloseClick}>
            ❌
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
}
