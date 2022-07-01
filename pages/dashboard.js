/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

export default function Dashboard({ data }) {
  const [list, setList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  useEffect(() => {
    if (data.length) {
      localStorage.setItem("userData", JSON.stringify(data));
      setList(data);
    }
  }, [data]);

  const deleteUser = (id) => {
    const listUsers = JSON.parse(localStorage.getItem("userData"));
    const updatedList = listUsers.filter((user) => user.id !== id);
    localStorage.setItem("userData", JSON.stringify(updatedList));
    setList(updatedList);
  };

  const addUser = () => {};

  return (
    <div className="max-w-screen-lg mx-auto my-12">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Avatar
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Profile Url
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      <button
                        type="button"
                        className="flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-toggle="modal"
                        onClick={() => {
                          setIsModalOpen(true);
                        }}
                        data-bs-target="#exampleModalCenteredScrollable"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"
                            fill="rgba(255,255,255,1)"
                          />
                        </svg>
                        <span className="pl-2"> Add User</span>
                      </button>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {list.map((user, index) => (
                    <tr className="bg-gray-100 border-b" key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <img
                          src={
                            user.avatar_url
                              ? user.avatar_url
                              : "https://avatars.githubusercontent.com/u/44?v=4"
                          }
                          className="rounded-full w-8"
                          alt={`Avatar ${user.id}`}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.login}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <a
                          href={user.html_url}
                          rel="noreferrer"
                          target="_blank"
                          className="text-blue-900"
                        >
                          {user.html_url}
                        </a>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2 justify-start">
                          <div>
                            <button
                              type="button"
                              className="inline-block mr-4 rounded p-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                              onClick={() => deleteUser(user.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z"
                                  fill="rgba(255,255,255,1)"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="inline-block rounded-full p-2 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                              data-bs-toggle="modal"
                              onClick={() => {
                                setIsModalOpen(true);
                                setSelectedUser(user);
                              }}
                              data-bs-target="#exampleModalCenteredScrollable"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"
                                  fill="rgba(255,255,255,1)"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isModalOpen && (
                <Modal
                  setIsModalOpen={setIsModalOpen}
                  user={selectedUser}
                  setList={setList}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users`);

  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
