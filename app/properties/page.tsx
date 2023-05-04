import React from "react";
import { getCurrentUser } from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import { getReservations } from "../actions/getReservations";
import TripsClient from "./PropertyClient";
import { getListings } from "../actions/getListings";
import PropertyClient from "./PropertyClient";

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (!listings.length) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Properties  found"
          subtitle="Looks like you haven't reserved any trips"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertyClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
