import { useState } from "react";

export default function Uploader() {
  const [preview, setPreview] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string); // base64 в стейт
    };
    reader.readAsDataURL(file); // читаем файл в base64
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ maxWidth: "200px", marginTop: "10px" }}
        />
      )}
    </div>
  );
}