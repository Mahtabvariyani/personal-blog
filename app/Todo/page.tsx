"use client";
import React, { useEffect, useState } from "react";
import { SiGooglemessages } from "react-icons/si";
import Lottie from "lottie-react";
import ghost from '@/public/ghost.json'
import { Button } from "@/components/ui/button"




type Todo = {
  _id: string;
  text: string | null;
  completed: boolean;
};

const Page = () => {
  const [isLoading, setLoading] = useState(true);
  const [todo, setTodo] = useState<Todo[]>([]);
  const [newTodoText, setnewTodoText] = useState<string>("");
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todo`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      });
  }, []);

  const addTask = async () => {
    if (!newTodoText) return;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todo`,
      {
        method: "POST",
        body: JSON.stringify({ text: newTodoText }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("data", data);
    setTodo([...todo, data]);
    setnewTodoText("");
  };

  const handleEdit = (dos: Todo) => {
    setEditTodo(dos);
  };

  const handleSave = async () => {
    if (!editTodo) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todo`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: editTodo._id,
          text: editTodo.text,
          completed: editTodo.completed,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      setTodo(
        todo.map((todo: Todo) =>
          todo._id === editTodo._id ? { ...todo, text: editTodo.text } : todo
        )
      );

      setEditTodo(null);
    }
  };

  const deleteTodo = async (id: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todo`,
      {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      setTodo(todo.filter((dos: Todo) => dos._id !== id));
    }
  };
  return (
    <div className="relative flex flex-col  justify-center items-center isolate px-6 pt-14 lg:px-8">
      <h4 className="firefly text-xl font-bold tracking-tight text-yellow-100 sm:text-6xl">
        Write_Something
      </h4>

      <div className=" flex items-center justify-center gap-x-6">
        {editTodo ? (
          <div className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="task"
                    value={editTodo.text!}
                    onChange={(e) =>
                      setEditTodo({ ...editTodo, text: e.target.value })
                    }
                    id="task"
                    className="block w-full rounded-md border-0 px-[170px] py-2 text-gray-900 shadow-sm  placeholder:text-gray-900 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">

              <Button
                type="submit"
                onClick={handleSave}
                className="block w-full rounded-md bg-blue-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Task
              </Button>
            </div>
          </div>
        ) : (
          <div className="mx-auto  max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="task"
                    value={newTodoText}
                    onChange={(e) => setnewTodoText(e.target.value)}
                    placeholder="Write a Task"
                    className="block w-full rounded-md border-0 px-[170px] py-2 text-gray-900 shadow-sm  placeholder:text-gray-900 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button
                type="submit"
                onClick={addTask}
                className="block w-full rounded-md bg-blue-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Post Message
              </Button>
            </div>
          </div>
        )}
      </div>
      {isLoading && <div className="text-white mt-10">
        
      <Lottie animationData={ghost} className="h-[15rem]" />
        </div>}
      {!isLoading && todo && todo.length == 0 ? (
        <div className="text-white mt-10">
          <Lottie animationData={ghost} className="h-[15rem]" />
        </div>
      ) : (
        <div className="text-white mt-7">
          {!isLoading &&
            todo &&
            todo.map((dos: Todo) => (
              <li
                key={dos._id}
                className="px-[100px] bg-blue-900 list-none flex py-2 rounded-lg my-3 hover:text-pink-300  text-lg w-full justify-between"
              >
                <div className="flex flex-row justify-start items-start w-8/12">
                  <SiGooglemessages size={30} className="text-pink-200" />

                  <span
                    className={`${
                      dos.completed ? "line-through" : "list-none"
                    } px-10 w-full text-yellow-300`}
                  >
                    {dos.text}
                  </span>
                </div>
                <div className="w-4/12 md:w-3/12 flex">
                  <Button
                    onClick={() => handleEdit(dos)}
                    className="text-sky-400 uppercase md:text-base px-3  hover:text-sky-100"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteTodo(dos._id)}
                    className="text-rose-400 uppercase md:text-base px-3  hover:text-rose-100 ml-3"
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
        </div>
      )}
    </div>
  );
};

export default Page;
