import axios from 'axios';
async function getUserData() {
  const res = await axios.get('http:localhost:3000/api/user');
  return res.data;
}

// async component - (not available in react)
// Only possible in server component not in client component
const Home = async () => {
  const userDetail = await getUserData();
  return (
    <div className='flex flex-col gap-2 text-xl text-gray-800 h-screen justify-center items-center'>
      <p>Hello There</p>
      <p>{userDetail.name}</p>
      <p>{userDetail.email}</p>
    </div>
  );
};

export default Home;
