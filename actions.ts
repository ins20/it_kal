"use server";
import fsPromises from "fs/promises";
import path from "path";

export async function getUser(userId: string) {
  const filePath = path.join(process.cwd(), "users.json");
  const file = await fsPromises.readFile(filePath);
  const data = JSON.parse(file.toString());
  if (data[userId]) {
    return data[userId];
  }
  data[userId] = [];
  await fsPromises.writeFile(filePath, JSON.stringify(data));
}

export async function checkRead(userId: string, id: number) {
  const filePath = path.join(process.cwd(), "users.json");
  const file = await fsPromises.readFile(filePath);
  const data = JSON.parse(file.toString());
  if (data[userId]) {
    data[userId] = [...data[userId], id];
  } else {
    data[userId] = [id];
  }

  await fsPromises.writeFile(filePath, JSON.stringify(data));
  return data[userId];
}
