import React from "react";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import { IListingParams, getListings } from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import { getCurrentUser } from "./actions/getCurrentUser";

type HomeProps = {
  searchParams: IListingParams;
};

const Home = async ({ searchParams }: HomeProps) => {
  const listing = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (!listing.length) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listing.map((list) => (
            <ListingCard key={list.id} data={list} currentUser={currentUser} />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
