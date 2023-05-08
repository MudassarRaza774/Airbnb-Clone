"use client";

import React from "react";

import EmptyState from "@/app/components/EmptyState";

type ErrorStateProps = {
  error: Error;
};

const ErrorState = ({ error }: ErrorStateProps) => {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
};

export default ErrorState;
