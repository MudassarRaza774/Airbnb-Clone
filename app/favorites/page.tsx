import React from "react";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import { getCurrentUser } from "../actions/getCurrentUser";
import { getFavoriteListing } from "../actions/getFavoriteListings";
import FavoriteClients from "./FavoriteClients";

const page = async () => {
  const currentUser = await getCurrentUser();
  const favoriteListings = await getFavoriteListing();

  if (!favoriteListings.length) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Favorites Found"
          subtitle="Looks like you have no favorite listings"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoriteClients listings={favoriteListings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
