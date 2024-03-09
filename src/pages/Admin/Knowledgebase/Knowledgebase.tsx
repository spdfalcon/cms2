import { useState } from "react";

export default function Knowledgebase() {
  const [islog , setIsLog] = useState(false)
  const mohammad = islog
  return (
    <div className="mt-20">
      {
        mohammad ? (
          <h1>mohammad</h1>
        ) : (
          ''
        )
      }
      <button onClick={()=>setIsLog(cur=>!cur)}>click</button>
    </div>
  );
}
