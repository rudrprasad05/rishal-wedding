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
