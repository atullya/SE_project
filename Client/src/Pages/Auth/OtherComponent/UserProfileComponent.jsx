import React from "react";
import { FaEye } from "react-icons/fa";
const UserProfileComponent = () => {
  return (
    <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
      <div className="max-w-sm bg-white shadow-xl rounded-lg text-gray-900">
        {/* Cover Image */}
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>

        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAMFBMVEXk5ueutLfY29ypr7Ln6ere4eK8wcPU19nq7O22u77b3t/Hy83R1NazuLvN0NK5vsDaM1loAAAE90lEQVR4nO2d25LbIAxAMYiLwZf//9viOG02jWMbkCNlR2f60N2++AwIEAiqlCAIgiAIgiAIgiAIgiAIgiAIgiAIlwMAStlolz/LD0D9QdUAWO2nlNxKStMQ7Xf6BDsk148m02XM7S+9S8PX+UDQqe82GXunv0kHgp/HbZXVZ/ZfoxP0m0b5Qa/DN+iAnc2hS44hp9jbgBq6My7LiDBQf+wBYN05lbVxLOfGAT2ed8k2nab+4vfA2S72sOHb1aYik5WJZ0+DVOHC1abOhaVNjpda2MUN+GqXrvO82gbi3lrsANMxm28K5soNG0f9+U9MLS7ZZqIWeACxzSXbRDYdDZo62U2m5yIDQ6tLthmY2ECzSmbkIRMao/9OCtQiCygNk5uG2mMBcBqGR9NAw9z/xExt0rgoe4Z+QAsOy8U4chl7vEd2lj4SuzSkMa9Q97PKXHkTk4hlLFrIZJwldQGPFzJ53qRNOVFDhjpoICFN/zeoczRcmUQaNHFGdMkrGkoZiJjxv0ybhEEDHmuVeYdWBtel079JhnKiQZ5mOuPpXERGZESmVAZ7nqEdmn+TzIkqmRJG0sOAiJlo5oUm6ZZGSXXJMYY4b0bOZ0hdoKYo470MbUkADKjDGfEZOupwRpqbLSAOZ8Qho1T4TTuaoPGChngPcAFvf4Z4llGo/Yz+HBAsVj+jXZjdbbDGM/qDM4zCmTv04a/QTjVnDi556YzRNIZFw+SmOVX8f0BPPpT9BaGqiUe7KIwaLUM/xzxoXQawqZ1baF2hUZczPNOWcTKqN73RsEQjz2NeqK9uoN6T2aL2eNOQnsq+o7KCfqTckn0LqCoZBgv/LaCi9HTke8ExFMaN6TnfpC0sP+OQj+0Aw/nG6akr/w6BmE7eb0xMQ/8noLw7oeM839D/CVjvzJ6OMW5gdjNrB7D6bWczWUVznPT3sNNsXton/2Yevs3kRo6edHtD4x9j+pJI2QRCUNYP0zQN3qrwFa8z7AEPqD+lltvjOa/kX97/8StYGsDaGHPfSsnN6ysn60AwjrNzKXc4HaNir7SIRJ0tXL8+mvMyOt9/O84pTV5bxbXvLY8ZDSnlptiQ2JptlueBJm/5+QSIw9oehxpPSksbTV4xGuWWt4xcwxF6Fso+1BYLEFTq2w/PRqeB2gfAox3Qjom0u4E6m7ucwzi6FMemwng/tjE9zZmT3c9Zqn3GvIj7qBAofY3KqjN9NEl4n3rh6MwfS0QhpqLnpar4zBYBqAnjPPaQ8QMjW9C4F7N26NO10w6EhFyVvctsL1wUBPuxZrkzXWaDfY3hBCZdNQ6g1jCftbmkCLXo6UJMmxH/GgpEGpfugkvCoHsql1tVLWZXA3/p8uXYBnEYIBjG/rPBe9uV3CWDZRMYuHQdTtxg1pS3gFFbj31LvhqMyzVEc+UW7dsDFGuYN7SWpGO8kIdG4wuVYKkFnmi7YAMfyZDPYxrKuQKjgFlpeAYRpS4elfr6Z7x32BCp3FADTf3hW7i6pgmf3r04R9XUyWGtvEVVwR3a9StsKpoG/REGNCrWAZiP/eHSl8+cyI99YVKcC+Be9Eel4u4AnzTmlcIhAPvZElRKdwVZ5TH/U/x0ILv18k8KH6lllPlvUJbWsNmS2aYsaEBzbpjSS2qetUzhigbrEfaLGIuGM9aDWaZIxhneFP2XYlHzpsRFEARBEARBoOAPhEhJogo6DqQAAAAASUVORK5CYII="
            alt="Woman looking front"
          />
        </div>

        {/* User Info */}
        <div className="text-center mt-4">
          <h2 className="font-semibold text-xl">Hhaa Smith</h2>
          <p className="text-gray-500">Freelance Web Designer</p>
        </div>

        {/* Stats */}
        <ul className="py-4 text-gray-700 flex justify-around">
          <li className="flex flex-col items-center">
            <svg
              className="w-5 h-5 text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span>2k</span>
          </li>
          <li className="flex flex-col items-center">
            <svg
              className="w-5 h-5 text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
            </svg>
            <span>10k</span>
          </li>
          <li className="flex flex-col items-center">
          <FaEye />
            <span>15</span>
          </li>
        </ul>

        {/* Follow Button */}
        <div className="border-t p-4 flex">
          <button className="w-1/2 mx-auto block rounded-full bg-gray-900 text-white font-semibold px-6 py-2 hover:bg-gray-700 transition duration-300">
         Edit Profile
          </button>
          <button className="w-1/2 mx-auto block rounded-full bg-gray-900 text-white font-semibold px-6 py-2 hover:bg-gray-700 transition duration-300">
      Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent;
