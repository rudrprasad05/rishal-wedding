"use server";

import prisma from "@/lib/prismadb";

export const PostImageDetails = async (data: { src: string }) => {
  const ad = await prisma.images.create({
    data: {
      src: data.src,
    },
  });

  return ad;
};

export const GetAllImageDetails = async () => {
  const ad = await prisma.images.findMany({
    take: undefined, // No limit
    skip: undefined,
    where: {},
  });

  return ad;
};

export const DeleteOneImage = async (id: number) => {
  const ad = await prisma.images.delete({
    where: {
      id,
    },
  });

  return ad;
};
