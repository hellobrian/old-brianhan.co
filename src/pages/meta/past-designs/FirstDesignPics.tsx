import * as React from "react";

interface FirstDesignPicsProps {
  pics: string[];
}

export default function FirstDesignPics({ pics }: FirstDesignPicsProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 8 }}>
      {pics.map((pic) => (
        <a key={pic} href={pic}>
          <img src={pic} alt="first design of blog page" />
        </a>
      ))}
    </div>
  );
}
