import type { IResizableTextareaProps } from "../types";

function ResizableTextarea({ className = '', value, onChange }: IResizableTextareaProps) {
  return (
    <textarea
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onInput={(e) => {
        const el = e.currentTarget;
        el.style.height = "auto"; // сброс
        el.style.height = el.scrollHeight + "px"; // подгон под контент
      }}
      style={{
        overflow: "hidden",
        resize: "none",
        boxSizing: "border-box",
      }}
    />
  );
}

export default ResizableTextarea;