/** @jsxImportSource @emotion/react */
import 'twin.macro';

const Card = () => (
  <div className="container">
  <div tw="shadow-lg md:flex bg-white p-6 leading-normal">
    {/* <img tw="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg" /> */}
    <div tw="text-center md:text-left">
      <h1 tw="text-gray-800">Luan Michel</h1>
      <h2 tw="text-blue-500">Software Developer</h2>
      <p tw="text-gray-800">luanmd@example.com</p>
      <p tw="text-gray-600">(15) 12345-56789</p>
    </div>
  </div>
</div>
)

export default Card;