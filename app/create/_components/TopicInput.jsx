import { Textarea } from "@/components/ui/textarea";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TopicInput({setTopic, setDifficultyLevel}) {
  return (
    <div className="mt-10 w-full flex flex-col">
      <h2>Provide a topic or paste your text, and we’ll generate customized study material</h2>
      <Textarea placeholder="Start writing here" className="mt-2 w-full" onChange={(event)=>setTopic(event.target.value)} />
      <h2 className="mt-5 mb-3">Select the Difficulty Level</h2>
      <Select onValueChange={(value)=>setDifficultyLevel(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Difficulty Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="easy">Easy</SelectItem>
          <SelectItem value="moderate">Moderate</SelectItem>
          <SelectItem value="hard">Hard</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TopicInput;
