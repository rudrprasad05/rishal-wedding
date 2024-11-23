import { NextRequest, NextResponse } from "next/server";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import * as fs from "fs";
import { saveAs } from "file-saver";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION ?? "",
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY ?? "",
  },
});

async function uploadFileToS3(file: any, fileName: string) {
  const fileBuffer = file;

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `wedding/${fileName}`,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  return fileName;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const fileName = searchParams.get("fileName");
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `wedding/${fileName}`,
  };

  const command = new GetObjectCommand(params);
  try {
    const { Body, ContentType } = await s3Client.send(command);

    if (!Body) {
      throw new Error("Empty body returned from S3.");
    }

    return new Response(Body as ReadableStream, {
      headers: {
        "Content-Type": ContentType || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("Error downloading file from S3:", error);
    return NextResponse.json({ error });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file: File = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name);

    return NextResponse.json(fileName);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
