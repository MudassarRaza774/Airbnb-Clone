import prisma from "@/app/libs/prismadb";

export const getListings = async () => {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListing = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return safeListing;
  } catch (error: any) {
    throw new Error(error);
  }
};
