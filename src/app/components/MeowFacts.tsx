"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";

const fetchMeowFacts = async () => {
  const url = "https://meowfacts.herokuapp.com";
  const fact = await fetch(url, { cache: "no-store" });
  const Fact = await fact.json();
  return Fact;
};

const MeowFacts = () => {
  const [meowFact, setMeowFact] = useState<any>();

  const fetchFact = async () => {
    const receivedFact = await fetchMeowFacts();
    setMeowFact(receivedFact.data[0]);
  };
  useEffect(() => {
    fetchFact();
  }, []);
  return (
    <div>
      <p>Your Place to find interesting Meow Facts...</p>
      <div className="w-[550px] p-10  rounded-md flex flex-col gap-y-2">
        <p className="">{meowFact}</p>
        <div className="self-end">
          <Button ClickFunction={fetchFact} />
        </div>
      </div>
    </div>
  );
};

export default MeowFacts;
