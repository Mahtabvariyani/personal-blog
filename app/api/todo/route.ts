import ClientPromise from "@/utils/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const client = await ClientPromise;
  const collection = client.db().collection("todos");
  try {
    const todos = await collection.find({}).toArray();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const client = await ClientPromise;
  const collection = client.db().collection("todos");
  const { text } = await req.json();
  try {
    const todo = { text: text, completed: false };
    await collection.insertOne(todo);

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { id, text, completed } = await req.json();
  const client = await ClientPromise;
  const collection = client.db().collection("todos");
  try {
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { text, completed } }
    );

    return NextResponse.json(
      { message: "Todo Updated Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(error, { status: 500 });
  }
}

export  async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const client = await ClientPromise;
  const collection = client.db().collection("todos");

  try {
    await collection.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json(
      { message: "Todo Deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(error, { status: 500 });
  }
}
