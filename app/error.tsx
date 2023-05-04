"use client";
import React from "react";
import EmptyState from "./components/EmptyState";

type ErrorProps = {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
  React.useEffect(() => {
    console.error(error);
  }, [error]);
  return <EmptyState title="Uh oh" subtitle="Something went wrong!" />;
};

export default Error;
