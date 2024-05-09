import { useEffect, useState } from "react";
import Table from "../../components/DashboardSection/Table/Table";
import { useParams } from "react-router";
import { TData } from "../../types";
import "./DashboardSection.css";
import MainButton from "../../components/shared/MainButton/MainButton";
import axios from "axios";
import API from "../../api/axios";

const DashboardSection = () => {
  const [messages, setMessages] = useState<TData>([]);

  useEffect(() => {
    axios
      .get(API.GET.messages)
      .then((res) => {
        setMessages(res.data.messages);
      })
      .catch((error) => {
        console.log("error getting messages", error);
      });
  }, []);

  const [data, setData] = useState<TData>([]);

  const { section } = useParams();

  const projects = [
    { id: "1", title: "apple", category: "fruit", img: "apple.jpg" },
    { id: "2", title: "banana", category: "fruit", img: "banana.jpg" },
    { id: "3", title: "cherry", category: "fruit", img: "cherry.jpg" },
    { id: "4", title: "dog", category: "animal", img: "dog.jpg" },
    { id: "5", title: "elephant", category: "animal", img: "elephant.jpg" },
    { id: "6", title: "flower", category: "plant", img: "flower.jpg" },
    { id: "7", title: "game", category: "entertainment", img: "game.jpg" },
    { id: "8", title: "house", category: "building", img: "house.jpg" },
    { id: "9", title: "tree", category: "plant", img: "tree.jpg" },
    { id: "10", title: "steve", category: "person", img: "steve.jpg" },
  ];

  // const messages = [
  //   {
  //     id: "1",
  //     name: "Alice",
  //     email: "alice@example.com",
  //     body: "Hello, Alice!",
  //   },
  //   { id: "2", name: "Bob", email: "bob@example.com", body: "Hi, Bob!" },
  //   {
  //     id: "3",
  //     name: "Charlie",
  //     email: "charlie@example.com",
  //     body: "Hey, Charlie!",
  //   },
  //   {
  //     id: "4",
  //     name: "David",
  //     email: "david@example.com",
  //     body: "Greetings, David!",
  //   },
  //   {
  //     id: "5",
  //     name: "Eve",
  //     email: "eve@example.com",
  //     body: "Salutations, Eve!",
  //   },
  //   {
  //     id: "6",
  //     name: "Frank",
  //     email: "frank@example.com",
  //     body: "Greetings, Frank!",
  //   },
  //   {
  //     id: "7",
  //     name: "Grace",
  //     email: "grace@example.com",
  //     body: "Hello, Grace!",
  //   },
  //   { id: "8", name: "Heidi", email: "heidi@example.com", body: "Hi, Heidi!" },
  //   { id: "9", name: "Ivan", email: "ivan@example.com", body: "Hey, Ivan!" },
  //   {
  //     id: "10",
  //     name: "Steve",
  //     email: "steve@example.com",
  //     body: "Greetings, Steve!",
  //   },
  // ];

  useEffect(() => {
    if (section == "projects") {
      setData(projects);
    } else if (section == "messages") {
      setData(messages);
    }
  }, [section]);

  return (
    <section className="page dashboard-section">
      <h1>{section}</h1>
      {/* <p>
        Count of {section} is {data.length}{" "}
      </p> */}
      <MainButton title="Add Project" url="/dashboard/project-request" />
      <div className="main-container">
        <Table data={data}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message: any) => {
              return (
                <tr>
                  <td>{message.ID}</td>
                  <td>{message.Name}</td>
                  <td>{message.Email}</td>
                  <td>{message.Body}</td>
                  <td>{message.Action}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default DashboardSection;
