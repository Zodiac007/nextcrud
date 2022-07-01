import { useEffect, useState } from "react";

export default function Modal({ user, setIsModalOpen, setList }) {
  const [localUser, setLocalUser] = useState({});

  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const listUsers = JSON.parse(localStorage.getItem("userData"));
    let updatedList = listUsers;
    if (localUser.id) {
      updatedList = updatedList.map((user) => {
        if (user.id === localUser.id) {
          return localUser;
        }
        return user;
      });
    } else {
      localUser.id = Math.random() * 10;
      updatedList.push(localUser);
    }
    localStorage.setItem("userData", JSON.stringify(updatedList));
    setList(updatedList);
    setIsModalOpen(false);
  };

  return (
    <div
      className="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalCenteredScrollable"
      //   tabIndex="-1"
      aria-labelledby="exampleModalCenteredScrollable"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalCenteredScrollableLabel"
            >
              {user.login ? user.login : "Add User"}
            </h5>
          </div>
          <div className="modal-body relative p-4">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  name="login"
                  value={localUser.login}
                  onChange={handleChange}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  name="html_url"
                  value={localUser.html_url}
                  onChange={handleChange}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Profile URL"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
